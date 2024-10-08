import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemListComponent } from './task-item-list.component';

describe('TaskItemListComponent', () => {
  let component: TaskItemListComponent;
  let fixture: ComponentFixture<TaskItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskItemListComponent]
    });
    fixture = TestBed.createComponent(TaskItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
