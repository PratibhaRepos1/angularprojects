import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSExampleComponent } from './rx-jsexample.component';

describe('RxJSExampleComponent', () => {
  let component: RxJSExampleComponent;
  let fixture: ComponentFixture<RxJSExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJSExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
