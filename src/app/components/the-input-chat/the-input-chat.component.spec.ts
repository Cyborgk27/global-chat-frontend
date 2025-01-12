import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInputChatComponent } from './the-input-chat.component';

describe('TheInputChatComponent', () => {
  let component: TheInputChatComponent;
  let fixture: ComponentFixture<TheInputChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheInputChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheInputChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
