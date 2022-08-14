import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryCircleComponent } from './subcategory-circle.component';

describe('SubcategoryCircleComponent', () => {
  let component: SubcategoryCircleComponent;
  let fixture: ComponentFixture<SubcategoryCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcategoryCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
