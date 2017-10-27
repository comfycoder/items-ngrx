import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {

  private _configData: any;

  constructor(private http: Http) { }

  // This is the method you want to call at bootstrap
  // Important: It should return a Promise
  load(): Promise<any> {

    this._configData = null;

    return this.http
      .get('./assets/config.json')
      .map((res: Response) => res.json())
      .toPromise()
      .then((data: any) => {
        this._configData = data;
      })
      .catch((err: any) => Promise.resolve());
  }

  get configData(): any {
    return this._configData;
  }

}
