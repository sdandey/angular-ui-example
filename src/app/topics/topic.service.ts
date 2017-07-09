import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Topic} from "./topic";

@Injectable()
export class TopicService {

  private _topicServiceUrl = "";

  constructor(private _http: Http) { }

  getTopics(): Observable<Topic[]> {
    return this._http.get(this._topicServiceUrl)
      .map((response: Response) => <Topic[]>response.json())
      .do(data => console.log('All:' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error() || 'Server error');
  }

}
