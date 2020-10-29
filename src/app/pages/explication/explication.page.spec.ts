import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExplicationPage } from './explication.page';

describe('ExplicationPage', () => {
  let component: ExplicationPage;
  let fixture: ComponentFixture<ExplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
