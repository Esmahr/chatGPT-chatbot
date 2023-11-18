// chat-page.component.ts

import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/openai.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {

  userMessage: string = '';
  chatGPTResponse: string | undefined;

  constructor(private openaiService: OpenaiService) { }

  onSubmit() {
    this.openaiService.teachGPT(this.userMessage)
      .subscribe(
        response => {
          this.chatGPTResponse = response;
          console.log('ChatGPT Cevabı:', response);
        },
        error => {
          console.error('Bir hata oluştu:', error);
        }
      );
  }
}
