import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMenuComponentComponent } from './category-menu-component.component';

describe('CategoryMenuComponentComponent', () => {
  let component: CategoryMenuComponentComponent;
  let fixture: ComponentFixture<CategoryMenuComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryMenuComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
