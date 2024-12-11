import { ChangeDetectionStrategy, Component, HostBinding, input, OnInit } from '@angular/core';

@Component({
  selector: 'calculator-bottom',
  standalone: true,
  imports: [],
  templateUrl: './calculator-bottom.component.html',
  styleUrl: './calculator-bottom.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  }
})
export class CalculatorBottomComponent {

  public isComand = input( false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '': value,
  })

  public isDobleSize = input( false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '': value,
  })

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDobleSize();
  }

}
