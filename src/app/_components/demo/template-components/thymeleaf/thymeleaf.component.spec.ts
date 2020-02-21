import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThymeleafComponent } from './thymeleaf.component';

describe('ThymeleafComponent', () => {
  let component: ThymeleafComponent;
  let fixture: ComponentFixture<ThymeleafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThymeleafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThymeleafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
