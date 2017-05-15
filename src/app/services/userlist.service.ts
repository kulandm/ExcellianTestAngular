import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map';
import { Http } from '@angular/http'

@Injectable()
export class UserlistService {

  constructor(protected http: Http) {}

  list(search: string = null): Observable<any> {
	    var params = new URLSearchParams();
	    if (search) params.set('search', search)

	    var result = this.http.get('./assets/data.json', { search: params })
	    .map(res => res.json().items)
	    .map(itemArray => {
            return itemArray.filter(x=> {
            	return (search) ? x.user.toLowerCase().indexOf(search) !== -1 : true;
            })
        })
	    return result;
	}
}
