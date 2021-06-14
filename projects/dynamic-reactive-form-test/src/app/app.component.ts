import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormField, FormConfiguration } from 'dynamic-reactive-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  staticForm: FormField[] = [
    {
      fieldLabel: 'FirstName',
      controlName: 'firstName',
      value: '',
      isDisabled: false,
      isMandatory: true,
      displayOrder: 1,
    },
    {
      fieldLabel: 'LastName',
      controlName: 'lastName',
      value: '',
      isDisabled: false,
      isMandatory: true,
      displayOrder: 2,
    },
    {
      fieldLabel: 'Age',
      controlName: 'age',
      value: '',
      isDisabled: false,
      isMandatory: true,
      displayOrder: 3,
    },
    {
      fieldLabel: 'Mobile',
      controlName: 'mobile',
      value: '',
      isDisabled: false,
      isMandatory: true,
      displayOrder: 4,
    },
  ];

  fromConfiguration: FormConfiguration = {
    fieldsPerPage: 2,
    formFieldsAlignment: 'vertical',
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
