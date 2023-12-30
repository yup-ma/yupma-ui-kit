import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { ButtonType, ButtonSize } from '../../../enums';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ---------------------------

  it('should handle type input', () => {
    component.type = ButtonType.PRIMARY;
    fixture.detectChanges();
    expect(component.type).toBe(ButtonType.PRIMARY);
  });

  it('should handle size input', () => {
    component.size = ButtonSize.LG;
    fixture.detectChanges();
    expect(component.size).toBe(ButtonSize.LG);
  });

  it('should handle disabled state', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(component.disabled).toBeTrue();
  });

  it('should handle loading state', () => {
    component.loading = true;
    fixture.detectChanges();
    expect(component.loading).toBeTrue();
  });

  it('should emit click event', () => {
    spyOn(component.click, 'emit');
    component.onClick();
    expect(component.click.emit).toHaveBeenCalled();
  });

  it('should emit mouseenter event', () => {
    spyOn(component.mouseenter, 'emit');
    component.onMouseEnter();
    expect(component.mouseenter.emit).toHaveBeenCalled();
  });

  it('should emit mouseleave event', () => {
    spyOn(component.mouseleave, 'emit');
    component.onMouseLeave();
    expect(component.mouseleave.emit).toHaveBeenCalled();
  });

  it('should emit focus event', () => {
    spyOn(component.focus, 'emit');
    component.onFocus();
    expect(component.focus.emit).toHaveBeenCalled();
  });

  it('should emit blur event', () => {
    spyOn(component.blur, 'emit');
    component.onBlur();
    expect(component.blur.emit).toHaveBeenCalled();
  });

  it('should not emit click event when disabled', () => {
    component.disabled = true;
    spyOn(component.click, 'emit');
    component.onClick();
    expect(component.click.emit).not.toHaveBeenCalled();
  });
});
