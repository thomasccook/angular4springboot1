import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Hero } from './hero';
import { environment } from '../environments/environment';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent {

    // Part 1_1
    title_1_1 = 'Tour of Heroes 1';
    myHero_1_1 = 'Windstorm 1';

    // Part 1_3
    title_1_3 : string;
    myHero_1_3: string;
    
    // Part 1_4
    title_1_4 = 'Tour of Heroes 4';
    heroes_1_4 = ['Windstorm4', 'Bombasto4', 'Magneta4', 'Tornado4'];
    myHero_1_4 = this.heroes_1_4[0];

    // Part 1_5
    heroes_1_5 = [
              new Hero(1, 'Windstorm'),
              new Hero(13, 'Bombasto'),
              new Hero(15, 'Magneta'),
              new Hero(20, 'Tornado')
    ];
    myHero_1_5 = this.heroes_1_5[0];
    
    // Part 2_3_1
    isUnchanged_2_3_1 = false;
    
    
    
    constructor( private http: HttpClient ) {

        // Part 3
        this.title_1_3 = 'Tour of Heroes 3';
        this.myHero_1_3 = 'Windstorm 3';
        
    }
    
    getVal_2_2() {
        return 1234;
    }

    deleteHero() {
        alert("Delete this Hero.");
    }
    
    // HTTP Test
    doRestCall() {

        this.http
            .get( environment.serverUrl + 'api/hi' )
            .subscribe(
            data => {
                console.log( data );
            },
            err => {
                console.log( err );
            }
            );



    }
}
