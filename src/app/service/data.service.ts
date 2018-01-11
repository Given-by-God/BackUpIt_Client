import { Injectable } from '@angular/core';
import  {Http} from '@angular/http';
import 'rxjs/add/operator/map'


@Injectable()
export class DataService {

  constructor(public http:Http) {
    // console.log('Data is connected')
  }

  getUsers(){

    return this.http.get('http://localhost:8080/user/list')
        .map(res =>res.json());
  }

  Post(data){
    return this.http.post('http://localhost:8080/user/add',data)
      .map(res =>res.json());
  }
}
