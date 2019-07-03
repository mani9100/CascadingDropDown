import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacadingDropDownComponent } from './cacading-drop-down.component';

describe('CacadingDropDownComponent', () => {
  let component: CacadingDropDownComponent;
  let fixture: ComponentFixture<CacadingDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacadingDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacadingDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
