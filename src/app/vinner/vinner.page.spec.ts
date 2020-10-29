import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VinnerPage } from './vinner.page';

describe('VinnerPage', () => {
  let component: VinnerPage;
  let fixture: ComponentFixture<VinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
