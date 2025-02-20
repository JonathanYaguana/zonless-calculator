import { CalculatorComponent } from './calculator.component';
import { CalculatorService } from '@/calculator/services/calculator.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { inject } from '@angular/core';

class MockCalculatorService {
  public resultText = jasmine.createSpy('resultText').and.returnValue('100.00');
  public subResultText = jasmine.createSpy('subResultText').and.returnValue('20');
  public lastOperator = jasmine.createSpy('lastOperator').and.returnValue('-');

  public constructNumber = jasmine.createSpy('constructNumber');
}

describe('CalculatorComponent', () => {
let fixture: ComponentFixture<CalculatorComponent>;
let compiled: HTMLElement;
let component: CalculatorComponent;
let mockCalculatorService: MockCalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorComponent],
      providers: [
        {
          provide: CalculatorService,
          useClass: MockCalculatorService,
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    mockCalculatorService = TestBed.inject(
      CalculatorService
    ) as unknown as MockCalculatorService;

    // fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have the current getters',()=>{
    expect(component.resultText()).toBe('100.00');
    expect(component.subResultText()).toBe('20');
    expect(component.lastOperator()).toBe('-');
  });

  it('should diplay proper calculation values',()=>{
    mockCalculatorService.resultText.and.returnValue('123');
    mockCalculatorService.subResultText.and.returnValue('987');
    mockCalculatorService.lastOperator.and.returnValue('+');

    fixture.detectChanges();

    console.log(compiled);

    expect(compiled.querySelector('span')?.innerText)

    expect(component.resultText()).toBe('123');
    expect(component.subResultText()).toBe('987');
    expect(component.lastOperator()).toBe('+');
  });

  it('should have 19 calculator-button component', () => {
    expect(component.calculatorButtons()).toBeTruthy();
    expect(component.calculatorButtons().length).toBe(19);

  });

  it('should have 19 calculator-button with content projected', () => {

    const butttons = compiled.querySelectorAll('calculator-bottom');
    expect(butttons.length).toBe(19);

    expect(butttons[0].textContent).toBe('C');
    expect(butttons[1].textContent).toBe('+/-');
    expect(butttons[2].textContent).toBe('%');
    expect(butttons[3].textContent).toBe('÷');

  });
});
