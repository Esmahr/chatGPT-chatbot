import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OpenaiService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'xxxxx'; // OpenAI API anahtarınızı buraya ekleyin

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    const prompt = `User: ${message}\nChatGPT:`;
    const data = {
      model: 'gpt-3.5-turbo', // veya kullanmak istediğiniz başka bir model
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: prompt }],
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    };

    return this.http.post(this.apiUrl, data, { headers });
  }
}