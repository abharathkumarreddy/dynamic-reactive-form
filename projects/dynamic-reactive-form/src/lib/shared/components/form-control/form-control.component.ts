import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '../../model/form-field-model';

@Component({
  selector: 'tk-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css'],
})
export class FormControlComponent implements OnInit {
  @Input()
  fControl: FormField;

  constructor() {}

  ngOnInit(): void {}
}
