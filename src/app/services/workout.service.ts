import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    http:any;
    apiKey: String;
    workoutsUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.apiKey = 'Shk5SIVYHIfDCvm6hY3xHugUuHnJeBcv';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/yoked_app/collections/workouts/';
    }

    getWorkouts() {
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }
}