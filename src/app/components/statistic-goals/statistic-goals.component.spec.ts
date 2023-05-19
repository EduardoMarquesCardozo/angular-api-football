import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticGoalsComponent } from './statistic-goals.component';

describe('StatisticGoalsComponent', () => {
  let component: StatisticGoalsComponent;
  let fixture: ComponentFixture<StatisticGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
