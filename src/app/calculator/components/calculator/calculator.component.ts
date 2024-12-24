import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
import { CalculatorBottomComponent } from '../calculator-bottom/calculator-bottom.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorBottomComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keyup)': 'handKeyboardEvent($event)',
  }
})
export class CalculatorComponent {

  public calculatorButtons = viewChildren( CalculatorBottomComponent );

  handleClick( key: string ){
    console.log({ key })
  }

  handKeyboardEvent( event: KeyboardEvent ){

    const keyEquivalent: Record<string, string> = {
      Escape: 'C',
      Clear: 'C',
      '*': 'x',
      '/': '÷',
      Enter: '='
    }

    const key = event.key;
    const keyValue = keyEquivalent[key] ?? key;

    this.handleClick( keyValue );

    this.calculatorButtons().forEach((button) => {
      button.keyboardPressedStyl(keyValue);
    })
  }

}
