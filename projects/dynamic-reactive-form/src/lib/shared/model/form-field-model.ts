export interface FormField {
  fieldLabel: string;
  controlName: string;
  value: string | number;
  isDisabled: boolean;
  isMandatory: boolean;
  displayOrder: number;
}
