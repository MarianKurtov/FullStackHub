import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSComponent } from './rx-js.component';

describe('RxJSComponent', () => {
  let component: RxJSComponent;
  let fixture: ComponentFixture<RxJSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxJSComponent]
    });
    fixture = TestBed.createComponent(RxJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
