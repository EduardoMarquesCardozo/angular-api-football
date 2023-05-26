import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { Component } from '@angular/core';

@Component({ selector: 'app-filter', template: '' })
class FilterStubComponent {}

@Component({ selector: 'app-team-content', template: '' })
class TeamContentStubComponent {}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        FilterStubComponent,
        TeamContentStubComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an app-filter element', () => {
    const filterElement = fixture.debugElement.query(
      By.directive(FilterStubComponent)
    );
    expect(filterElement).toBeTruthy();
  });

  it('should have an app-team-content element', () => {
    const teamContentElement = fixture.debugElement.query(
      By.directive(TeamContentStubComponent)
    );
    expect(teamContentElement).toBeTruthy();
  });
});
