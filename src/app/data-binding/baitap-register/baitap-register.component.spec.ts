import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapRegisterComponent } from './baitap-register.component';

describe('BaitapRegisterComponent', () => {
  let component: BaitapRegisterComponent;
  let fixture: ComponentFixture<BaitapRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
