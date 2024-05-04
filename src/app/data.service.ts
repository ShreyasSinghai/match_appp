import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //using this api for fetching the data
  private usingUrl = 'http://192.46.214.33:3000/api/data/getUpcomingMatches';

  constructor(private http: HttpClient) {}

  fetchdata(): Observable<any> {
    return this.http.get(this.usingUrl);
  }
}
