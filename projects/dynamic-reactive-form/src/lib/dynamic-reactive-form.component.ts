import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormField } from './shared/model/form-field-model';
import { FormFieldsGroup } from './shared/model/form-fields-group.model';
import { FormConfiguration } from './shared/model/form-configuration.model';

@Component({
  selector: 'tk-dynamic-reactive-form',
  templateUrl: './dynamic-reactive-form.component.html',
  styles: [],
})
export class DynamicReactiveFormComponent implements OnInit, OnChanges {
  @Input()
  formFields: FormField[];

  @Input()
  formConfiguration: FormConfiguration;

  formGroup = this.fb.group({});

  formGroups: FormFieldsGroup[];
  totalNumberOfFormFields: number;
  fieldsPerPage: number;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formFields && changes.formFields.currentValue) {
      this.formFields = changes.formFields.currentValue;
    }

    if (changes.formConfiguration && changes.formConfiguration.currentValue) {
      if (
        changes.formConfiguration.currentValue.fieldsPerPage &&
        changes.formConfiguration.currentValue.fieldsPerPage !== 0 &&
        !isNaN(changes.formConfiguration.currentValue.fieldsPerPage)
      ) {
        this.fieldsPerPage =
          changes.formConfiguration.currentValue.fieldsPerPage;
      } else {
        this.fieldsPerPage = this.getTotalNumberOfFormFields();
      }
    } else {
      this.fieldsPerPage = this.getTotalNumberOfFormFields();
    }

    this.sortFormControls();
    this.createFormGroups();
    this.createAndAddGroups();
    this.addControlsToGroups();

    console.log(this.formGroup);
  }

  createFormGroups(): void {
    let counter = 0;

    this.formGroups = [];
    this.totalNumberOfFormFields = this.getTotalNumberOfFormFields();

    for (let i = 0; i < this.totalNumberOfFormFields; i += this.fieldsPerPage) {
      counter++;

      const fGroup = new FormFieldsGroup();
      fGroup.groupName = `group_${counter}`;
      fGroup.groupFields = this.formFields.slice(i, i + this.fieldsPerPage);

      this.formGroups.push(fGroup);
    }
  }

  createAndAddGroups(): void {
    this.formGroups.forEach((group: FormFieldsGroup) => {
      this.formGroup.addControl(group.groupName, this.fb.group({}));
    });
  }

  addControlsToGroups(): void {
    this.formGroups.forEach((group: FormFieldsGroup) => {
      const formGroup = this.formGroup.get(group.groupName) as FormGroup;

      group.groupFields.forEach((control: FormField) => {
        formGroup.addControl(
          control.controlName,
          new FormControl({
            value: control.value,
            disabled: control.isDisabled,
          })
        );
      });
    });
  }

  sortFormControls(): void {
    const assignOrder = (displayOrder: number | null): number => {
      if (displayOrder) {
        return displayOrder;
      } else {
        return Infinity;
      }
    };

    const sorter = (a, b) => {
      return assignOrder(a.displayOrder) - assignOrder(b.displayOrder);
    };

    this.formFields.sort(sorter);
  }

  getTotalNumberOfFormFields(): number {
    if (this.formFields) {
      return this.formFields.length;
    }
  }
}
