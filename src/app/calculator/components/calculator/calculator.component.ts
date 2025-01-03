import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorBottomComponent } from '../calculator-bottom/calculator-bottom.component';
import { CalculatorService } from '@/calculator/services/calculator.service';

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

  private calculatorService = inject(CalculatorService);

  public calculatorButtons = viewChildren( CalculatorBottomComponent );

  public resultText = computed( () => this.calculatorService.resultText() );
  public subResultText = computed( () => this.calculatorService.subResultText() );
  public lastOperator = computed( () => this.calculatorService.lastOperator() );

  handleClick( key: string ){
    this.calculatorService.constructNumber( key );
    console.log(key);
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
