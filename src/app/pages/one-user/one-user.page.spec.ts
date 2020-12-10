import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OneUserPage } from './one-user.page';

describe('OneUserPage', () => {
  let component: OneUserPage;
  let fixture: ComponentFixture<OneUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OneUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
