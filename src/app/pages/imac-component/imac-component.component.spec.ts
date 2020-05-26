import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImacComponentComponent } from './imac-component.component';

describe('ImacComponentComponent', () => {
  let component: ImacComponentComponent;
  let fixture: ComponentFixture<ImacComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImacComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImacComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
