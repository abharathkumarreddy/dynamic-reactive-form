import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../model/form-field-model';

@Component({
  selector: 'tk-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  @Input()
  formGroup: FormGroup;

  @Input()
  groupFields: FormField[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.formGroup.controls);
  }
}
