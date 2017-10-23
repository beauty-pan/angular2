import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { InterceptorService  } from 'ng2-interceptors';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class NoticeService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: InterceptorService ) { }



  // 注销
  private url_authLogout = 'auth/logout';
  logout(userId: string): Promise<void> {
    return this.http.post(this.url_authLogout,
      JSON.stringify({userId:userId}), {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('发生错误', error);
    return Promise.reject(error.message || error);
  }
}

