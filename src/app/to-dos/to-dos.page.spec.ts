import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToDosPage } from './to-dos.page';

describe('ToDosPage', () => {
  let component: ToDosPage;
  let fixture: ComponentFixture<ToDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
