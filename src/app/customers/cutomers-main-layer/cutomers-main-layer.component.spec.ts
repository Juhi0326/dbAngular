import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CutomersMainLayerComponent } from './cutomers-main-layer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CutomersMainLayerComponent', () => {
  let component: CutomersMainLayerComponent;
  let fixture: ComponentFixture<CutomersMainLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [CutomersMainLayerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
