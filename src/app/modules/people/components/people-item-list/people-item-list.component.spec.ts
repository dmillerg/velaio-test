import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleItemListComponent } from './people-item-list.component';

describe('PeopleItemListComponent', () => {
  let component: PeopleItemListComponent;
  let fixture: ComponentFixture<PeopleItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleItemListComponent]
    });
    fixture = TestBed.createComponent(PeopleItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
