import { NgModule } from '@angular/core';
import { UiKitComponent } from './ui-kit.component';
import { ButtonComponent, AccordionComponent } from './components';


@NgModule({
  declarations: [
    UiKitComponent,
    ButtonComponent,
    AccordionComponent
  ],
  imports: [
  ],
  exports: [
    UiKitComponent
  ]
})
export class UiKitModule { }
