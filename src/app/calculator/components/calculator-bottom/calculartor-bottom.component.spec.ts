import { CalculatorBottomComponent } from './calculator-bottom.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CalculatorBottomComponent', () => {
let fixture: ComponentFixture<CalculatorBottomComponent>;
let compiled: HTMLElement;
let component: CalculatorBottomComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorBottomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorBottomComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should apply w-1/4 doubleSize is false', () => {
    const hostCssClasses: string[] = compiled.classList.value.split(' ');

    expect(hostCssClasses).toContain('w-1/4');
    expect(component.isDobleSize()).toBeFalse();
  });

  it('should apply w-2/4 doubleSize is false', () => {
    fixture.componentRef.setInput('isDobleSize',true);
    fixture.detectChanges();

    const hostCssClasses: string[] = compiled.classList.value.split(' ');
    expect(hostCssClasses).toContain('w-2/4');
    expect(component.isDobleSize()).toBeTrue();
  });

  it('should emit onClick when handleClik id called', () => {
    //Espias
    spyOn( component.onClick, 'emit');

    component.handleClick();

    expect( component.onClick.emit).toHaveBeenCalled();
  });

  it('should set isPressed to true and the false when keyboarPressStyle is called with a matching key', (done) =>{

    component.contentValue()!.nativeElement.innerText = '1';
    component.keyboardPressedStyl('1');

    expect(component.isPressed()).toBeTrue();

    setTimeout(() =>{
      expect(component.isPressed()).toBeFalse();
      done();
    }, 100);
  });
});
