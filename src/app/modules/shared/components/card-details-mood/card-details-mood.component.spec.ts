import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsMoodComponent } from './card-details-mood.component';

describe('CardDetailsMoodComponent', () => {
  let component: CardDetailsMoodComponent;
  let fixture: ComponentFixture<CardDetailsMoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDetailsMoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDetailsMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
