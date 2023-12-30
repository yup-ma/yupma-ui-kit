import { Component } from '@angular/core';
import { ButtonType } from '@yupma/ui-kit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui-test';
  buttonType = ButtonType.DANGER;

  changeButtonType(){
    this.buttonType = ButtonType.PRIMARY
  }
  changeButtonType2(){
    this.buttonType = ButtonType.CONFIRM
  }
}
