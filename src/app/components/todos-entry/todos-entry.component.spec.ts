import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosEntryComponent } from './todos-entry.component';

describe('TodosEntryComponent', () => {
  let component: TodosEntryComponent;
  let fixture: ComponentFixture<TodosEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
