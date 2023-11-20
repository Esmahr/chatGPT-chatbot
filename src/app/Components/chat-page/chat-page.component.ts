// chat-page.component.ts

import { Component } from '@angular/core';
import { OpenaiService } from 'src/app/openai.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {
  userMessage = '';
  chatHistory: { content: string; isUser: boolean }[] = [];

  constructor(private chatbotService: OpenaiService) {}

  sendMessage() {
    this.chatHistory.push({ content: this.userMessage, isUser: true });

    this.chatbotService.sendMessage(this.userMessage).subscribe((response) => {
      const chatGPTResponse = response.choices[0]?.message?.content || 'Sorry, I didn\'t understand that.';
      this.chatHistory.push({ content: chatGPTResponse, isUser: false });
    });

    this.userMessage = '';
  }

  isUserMessage(message: any): boolean {
    return message.isUser;
  }

  getMessageContent(message: any): string {
    return message.content;
  }

}
