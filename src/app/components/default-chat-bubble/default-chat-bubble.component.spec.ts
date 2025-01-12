import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultChatBubbleComponent } from './default-chat-bubble.component';

describe('DefaultChatBubbleComponent', () => {
  let component: DefaultChatBubbleComponent;
  let fixture: ComponentFixture<DefaultChatBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultChatBubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultChatBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
