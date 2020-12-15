import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavberComponentComponent } from './navber-component.component';

describe('NavberComponentComponent', () => {
  let component: NavberComponentComponent;
  let fixture: ComponentFixture<NavberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavberComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
