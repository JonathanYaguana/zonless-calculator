import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'calculator-bottom',
  standalone: true,
  imports: [],
  templateUrl: './calculator-bottom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  }
})
export class CalculatorBottomComponent {

}
