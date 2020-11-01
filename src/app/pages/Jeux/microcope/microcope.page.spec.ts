import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MicrocopePage } from './microcope.page';

describe('MicrocopePage', () => {
  let component: MicrocopePage;
  let fixture: ComponentFixture<MicrocopePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrocopePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MicrocopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
