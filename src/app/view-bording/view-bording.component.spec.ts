import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBordingComponent } from './view-bording.component';

describe('ViewBordingComponent', () => {
  let component: ViewBordingComponent;
  let fixture: ComponentFixture<ViewBordingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBordingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
