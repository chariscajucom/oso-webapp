import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudorgsComponent } from './studorgs.component';

describe('StudorgsComponent', () => {
  let component: StudorgsComponent;
  let fixture: ComponentFixture<StudorgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudorgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudorgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
