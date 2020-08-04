import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRecipeComponent } from './submit-recipe.component';

describe('SubmitRecipeComponent', () => {
  let component: SubmitRecipeComponent;
  let fixture: ComponentFixture<SubmitRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
