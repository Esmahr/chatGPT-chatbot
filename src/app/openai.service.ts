import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import OpenAI from 'openai';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OpenaiService {

  private apiKey = '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';
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  constructor(private http: HttpClient) { }

  teachGPT(userMessage: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const requestData = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: userMessage }
      ]
    };

    return this.http.post<any>(this.apiUrl, requestData, { headers })
      .pipe(
        map(response => response.choices[0].message.content),
        catchError(error => {
          console.error('An error occurred:', error);
          return of('');
        })
      );
  }
}