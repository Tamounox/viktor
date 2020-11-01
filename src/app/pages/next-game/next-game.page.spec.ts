import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NextGamePage } from './next-game.page';

describe('NextGamePage', () => {
  let component: NextGamePage;
  let fixture: ComponentFixture<NextGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NextGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
