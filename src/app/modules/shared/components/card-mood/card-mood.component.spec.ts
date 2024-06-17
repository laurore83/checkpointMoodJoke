import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMoodComponent } from './card-mood.component';

describe('CardMoodComponent', () => {
  let component: CardMoodComponent;
  let fixture: ComponentFixture<CardMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
