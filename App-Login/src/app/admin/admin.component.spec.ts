import { TestBed, async } from '@angular/core/testing';
import { AppComponentAdmin } from './admin.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponentAdmin
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponentAdmin);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'userapp'`, () => {
    const fixture = TestBed.createComponent(AppComponentAdmin);
    const app = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponentAdmin);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('userapp app is running!');
  });
});