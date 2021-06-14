import { NgModule } from '@angular/core';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormGroupComponent } from './shared/components/form-group/form-group.component';
import { FormControlComponent } from './shared/components/form-control/form-control.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    DynamicReactiveFormComponent,
    FormGroupComponent,
    FormControlComponent,
  ],
  imports: [BrowserModule, MatStepperModule, CdkStepperModule],
  exports: [DynamicReactiveFormComponent],
})
export class DynamicReactiveFormModule {}
