import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveToDoComponent } from './save-to-do.component';

describe('SaveToDoComponent', () => {
  let component: SaveToDoComponent;
  let fixture: ComponentFixture<SaveToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
