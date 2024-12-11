import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorBottomComponent } from '../calculator-bottom/calculator-bottom.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [CalculatorBottomComponent],
  templateUrl: './calculator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {

}
