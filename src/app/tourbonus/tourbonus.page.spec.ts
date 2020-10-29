import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourbonusPage } from './tourbonus.page';

describe('TourbonusPage', () => {
  let component: TourbonusPage;
  let fixture: ComponentFixture<TourbonusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourbonusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourbonusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
