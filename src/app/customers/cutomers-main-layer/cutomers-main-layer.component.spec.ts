import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomersMainLayerComponent } from './cutomers-main-layer.component';

describe('CutomersMainLayerComponent', () => {
  let component: CutomersMainLayerComponent;
  let fixture: ComponentFixture<CutomersMainLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutomersMainLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutomersMainLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
