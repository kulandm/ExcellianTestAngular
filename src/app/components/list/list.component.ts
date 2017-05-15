import {Component, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { Subject, Observable } from "rxjs";
import { UserlistService } from '../../services/userlist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  	users$: Observable<any>;

  	terms: string = "";
  	private searchTermStream = new Subject<string>();

  	constructor(protected userlistService: UserlistService) { }

  	ngOnInit() {
	    const searchSource = this.searchTermStream
	      .debounceTime(1000)
	      .distinctUntilChanged()
	      .map(searchTerm => {
	        this.terms = searchTerm;
	        return {search: searchTerm}
	      });

	    const source = searchSource
	      .startWith({search: this.terms})
	      .switchMap((params: {search: string}) => {
	        return this.userlistService.list(params.search)
	      })
	      .share();

	    this.users$ = source;
  	}

  	search(terms: string) {
    	this.searchTermStream.next(terms)
  	}

}
