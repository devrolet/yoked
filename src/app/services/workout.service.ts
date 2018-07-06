import {Injectable} from '@angular/core';
import {Http, HttpModule, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WorkoutService {
    http:any;
    apiKey: String;
    workoutsUrl: String;

    constructor(http:Http) {
        this.http = http;
        this.apiKey = 'OYabh6u4VtupmOrIv0hhXaPkZbXoAmDm';
        this.workoutsUrl = 'https://api.mlab.com/api/1/databases/yoked_app/collections/workouts/';
    }

    getWorkouts() {
        return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
            .map(res => res.json());
    }

    addWorkout(workout) {
        var headers = new Headers();
        headers.append('Content Type', 'application/json');
        return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {headers:headers})
            .map(res => res.json());
    }
}