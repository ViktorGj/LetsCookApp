import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavesComponent } from './faves.component';

describe('FavesComponent', () => {
  let component: FavesComponent;
  let fixture: ComponentFixture<FavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
