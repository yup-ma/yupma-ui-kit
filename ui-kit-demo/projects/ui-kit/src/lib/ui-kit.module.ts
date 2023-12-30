import { NgModule } from '@angular/core';
import { YupmaUiKitComponent } from './ui-kit.component';
import { ButtonComponent, AccordionComponent } from './components';


@NgModule({
  declarations: [
    YupmaUiKitComponent,
    ButtonComponent,
    AccordionComponent
  ],
  imports: [
  ],
  exports: [
    YupmaUiKitComponent,
    ButtonComponent,
    AccordionComponent,
  ]
})
export class YupmaUiKitModule { }
