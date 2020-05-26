import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadComponent } from './ipad.component';

describe('IpadComponent', () => {
  let component: IpadComponent;
  let fixture: ComponentFixture<IpadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
