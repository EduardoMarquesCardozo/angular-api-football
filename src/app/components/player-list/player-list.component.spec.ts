import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { PlayerListComponent } from './player-list.component';
import { SharingService } from 'src/app/services/home-service';
import { PlayerResponse } from 'src/app/data/player';

describe('PlayerListComponent', () => {
  let component: PlayerListComponent;
  let fixture: ComponentFixture<PlayerListComponent>;
  let mockSharingService: any;
  let playerListSubject: BehaviorSubject<PlayerResponse[]>;

  beforeEach(async () => {
    mockSharingService = {
      getPlayerData: () => {},
    };
    playerListSubject = new BehaviorSubject<PlayerResponse[]>([
      {
        player: {
          id: 1,
          name: 'Test Player 1',
          firstname: 'Test',
          lastname: 'Player',
          age: 30,
          birth: {
            date: '1993-05-13',
            place: 'Place',
            country: 'Country',
          },
          nationality: 'Testland',
          height: '180 cm',
          weight: '80 kg',
          injured: false,
          photo: '',
        },
      },
      {
        player: {
          id: 2,
          name: 'Test Player 2',
          firstname: 'Test',
          lastname: 'Player',
          age: 28,
          birth: {
            date: '1995-05-13',
            place: 'Place',
            country: 'Country',
          },
          nationality: 'Testland',
          height: '180 cm',
          weight: '80 kg',
          injured: false,
          photo: '',
        },
      },
    ]);

    spyOn(mockSharingService, 'getPlayerData').and.returnValue(
      playerListSubject.asObservable()
    );

    await TestBed.configureTestingModule({
      declarations: [PlayerListComponent],
      providers: [{ provide: SharingService, useValue: mockSharingService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct data in table', () => {
    fixture.whenStable().then(() => {
      const rows = fixture.debugElement.queryAll(
        By.css('.player-list tbody tr')
      );
      expect(rows.length).toEqual(2);
      expect(rows[0].nativeElement.textContent).toContain('Test Player 1');
      expect(rows[0].nativeElement.textContent).toContain('30');
      expect(rows[1].nativeElement.textContent).toContain('Test Player 2');
      expect(rows[1].nativeElement.textContent).toContain('28');
    });
  });
});
