import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, OnInit, output, signal, viewChild } from '@angular/core';

@Component({
  selector: 'calculator-bottom',
  standalone: true,
  imports: [],
  templateUrl: './calculator-bottom.component.html',
  styleUrl: './calculator-bottom.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
    '[class.w-2/4]': 'isDobleSize()',
    '[class.w-1/4]': '!isDobleSize()',
  }
})
export class CalculatorBottomComponent {

  public isPressed = signal(false);

  public onClick = output<string>();
  public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

  public isCommand = input( false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '': value,
  });

  public isDobleSize = input( false, {
    transform: ( value: boolean | string ) =>
      typeof value === 'string' ? value === '': value,
  });

  // @HostBinding('class.w-2/4') get commandStyle() {
  //   return this.isDobleSize();
  // }

  handleClick(){

    if( !this.contentValue()?.nativeElement ){
      return;
    }

    const value = this.contentValue()!.nativeElement.innerText;

    this.onClick.emit(value.trim());
  }

  public keyboardPressedStyl( key: string ){
    if ( !this.contentValue() ) return;

    const value = this.contentValue()!.nativeElement.innerText;

    if ( value !== key) return;

    this.isPressed.set(true);

    setTimeout( () => {
      this.isPressed.set(false);
    }, 100);
  }
}
