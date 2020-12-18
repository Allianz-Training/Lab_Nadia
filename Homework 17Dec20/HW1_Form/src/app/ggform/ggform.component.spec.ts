import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GgformComponent } from './ggform.component';

describe('GgformComponent', () => {
  let component: GgformComponent;
  let fixture: ComponentFixture<GgformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GgformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
