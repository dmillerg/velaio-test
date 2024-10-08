import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPreviewComponent } from './task-preview.component';

describe('TaskPreviewComponent', () => {
  let component: TaskPreviewComponent;
  let fixture: ComponentFixture<TaskPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskPreviewComponent]
    });
    fixture = TestBed.createComponent(TaskPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
