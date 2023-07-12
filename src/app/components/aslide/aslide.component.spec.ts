import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AslideComponent} from './aslide.component';

describe('AslideComponent', () => {
  let component: AslideComponent;
  let fixture: ComponentFixture<AslideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AslideComponent]
    });
    fixture = TestBed.createComponent(AslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
