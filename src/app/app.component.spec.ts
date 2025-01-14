import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should be 3", () => {
    // A = Arrange
    const num1 = 1;
    const num2 = 2;

    // A = Act
    const result = num1 + num2;

    // A = Assert
    expect(result).toBe(3)
  })

  it(`should have the 'zoneless-calculator' title`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zoneless-calculator');
  });

  it('should render router-outlet', () => {

    expect(compiled.querySelector('router-outlet')).not.toBeNull();
    // const compiled = fixture.nativeElement as HTMLElement;
    // expect(compiled.querySelector('h1')?.textContent).toContain('Hello, zoneless-calculator');
  });

  it('should render router-outlet wrapped with css classes', () => {

    const divElement = compiled.querySelector('div');

    const mustHaveClasses = 'min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5'
    .split(' ');

    expect(divElement).not.toBeNull();

    // console.log(divElement?.classList.value);

    const divClasses = divElement?.classList.value.split(' ');

    mustHaveClasses.forEach((className) => {
      expect(divClasses).toContain(className);
    });
  });

  it("should contarin the 'buy me a beer' link ", () => {

    const anchoElement = compiled.querySelector('a');

    expect(anchoElement).not.toBeNull();

    expect(anchoElement?.title).toBe('Buy me a beer');

    expect(anchoElement?.getAttribute('href')).toBe('https://www.buymeacoffee.com/scottwindon');


  });

});
