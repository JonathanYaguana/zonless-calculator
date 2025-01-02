import { Injectable, signal } from '@angular/core';

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '*', '/'];
const specialOperators = ['+/-', '%', '.', '=', 'C', 'Backspace'];

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public resultText = signal('10');
  public subResultText = signal('20');
  public lastOperator = signal('+');

  public constructNumber( value: string ) {
    //validar input
    if( ![...numbers, ...operators, ...specialOperators].includes(value)) {
      console.log('Invalid input', value);
      return;
    }
  }
}
