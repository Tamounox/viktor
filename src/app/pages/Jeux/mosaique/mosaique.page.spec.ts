import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MosaiquePage } from './mosaique.page';

describe('MosaiquePage', () => {
  let component: MosaiquePage;
  let fixture: ComponentFixture<MosaiquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosaiquePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MosaiquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
