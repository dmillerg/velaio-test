import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePreviewComponent } from './people-preview.component';

describe('PeoplePreviewComponent', () => {
  let component: PeoplePreviewComponent;
  let fixture: ComponentFixture<PeoplePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeoplePreviewComponent]
    });
    fixture = TestBed.createComponent(PeoplePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
