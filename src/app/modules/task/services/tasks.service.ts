import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASK } from 'src/app/core/constant/models/task.model';

@Injectable()
export class TasksService {
  // private dirUrl: string = environment.gatewayUrl;
  private url: string = 'https://jsonplaceholder.typicode.com/';
  private httpClient = inject(HttpClient);

  getTasks(): Observable<TASK[]> {
    return this.httpClient.get<TASK[]>(`${this.url}todos`)
  }
}
