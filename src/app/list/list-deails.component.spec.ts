import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeailsComponent } from './list-deails.component';

describe('ListDeailsComponent', () => {
  let component: ListDeailsComponent;
  let fixture: ComponentFixture<ListDeailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
