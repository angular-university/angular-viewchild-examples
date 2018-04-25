import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSampleComponent } from './color-sample.component';

describe('ColorSampleComponent', () => {
  let component: ColorSampleComponent;
  let fixture: ComponentFixture<ColorSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
