import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {
  }

  doRestCall() {

/*
    this.http.get('http://localhost:8080/learn002/api/hi').subscribe(data => {
      // Read the result field from the JSON response.
      alert('marker2');
      console.log(data);

    });
  */
    
    this.http
	  .get(environment.serverUrl + 'api/hi')
	  .subscribe(
	    data => {
		    console.log(data);
	    },
	    err => {
	      console.log(err);
	    }
	  );
    
    

  }
}
