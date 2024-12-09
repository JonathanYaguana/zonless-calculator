import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorBottomComponent } from "../../components/calculator-bottom/calculator-bottom.component";

@Component({
  selector: 'calculator-view',
  standalone: true,
  imports: [CalculatorBottomComponent],
  templateUrl: './calculator-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorViewComponent {

}
