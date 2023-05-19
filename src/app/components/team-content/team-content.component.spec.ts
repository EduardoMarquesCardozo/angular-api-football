import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamContentComponent } from './team-content.component';

describe('TeamContentComponent', () => {
  let component: TeamContentComponent;
  let fixture: ComponentFixture<TeamContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
