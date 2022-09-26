import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosHomepgComponent } from './todos-homepg.component';

describe('TodosHomepgComponent', () => {
  let component: TodosHomepgComponent;
  let fixture: ComponentFixture<TodosHomepgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosHomepgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosHomepgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
