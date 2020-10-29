import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TourismePage } from './tourisme.page';

describe('TourismePage', () => {
  let component: TourismePage;
  let fixture: ComponentFixture<TourismePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourismePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TourismePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
