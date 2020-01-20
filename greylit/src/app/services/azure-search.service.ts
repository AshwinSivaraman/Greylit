import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AzureSearchService {

  constructor(private http: HttpClient) {
  }

  searchFor(search) {
    const headers = new HttpHeaders().set('api-key', '7A02B99AF4F1F2C68A9D9ED02399E7BC').set('Content-Type', 'application/json');
    const params = {search, 'api-version': '2019-05-06'};
    const options = {headers, params};
    return this.http.get('https://greylitsearch2.search.windows.net/indexes/greylit2-index/docs', {
      headers,
      params: {search, 'api-version': '2019-05-06'}
    });
  }
}
