import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZalogujComponent } from './zaloguj.component';


describe('ZalogujComponent', () => {
  let component: ZalogujComponent;
  let fixture: ComponentFixture<ZalogujComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZalogujComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZalogujComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
