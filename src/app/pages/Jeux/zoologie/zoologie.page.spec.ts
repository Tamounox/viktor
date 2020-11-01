import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZoologiePage } from './zoologie.page';

describe('ZoologiePage', () => {
  let component: ZoologiePage;
  let fixture: ComponentFixture<ZoologiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoologiePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZoologiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
