import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonSize, ButtonType } from '../../../enums';

@Component({
  selector: 'ym-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType = ButtonType.DEFAULT;
  @Input() size: ButtonSize = ButtonSize.DEFAULT;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Output() click = new EventEmitter();
  @Output() mouseenter = new EventEmitter();
  @Output() mouseleave = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();


  onClick() {
    this.click.emit();
  }
  onMouseEnter() {
    this.mouseenter.emit();
  }
  onMouseLeave() {
    this.mouseleave.emit();
  }
  onFocus() {
    this.focus.emit();
  }
  onBlur() {
    this.blur.emit();
  }

  getButtonClasses() {
    let classes = 'action-btn ym-relative ym-display-flex ym-align-items-center ym-gap-3 ym-font-weight-bold ym-text-black-normal ym-p-3 ym-bg-white ym-transition-duration-medium ym-rounded-6';

    // Add conditional classes
    if (this.type) {
      classes += ` ym-btn-${this.type.toLowerCase()}`;
    }

    return classes;
  }
}
