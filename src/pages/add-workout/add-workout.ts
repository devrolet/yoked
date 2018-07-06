import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutsPage} from '../workouts/workouts';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {
  public title: String;
  public note: String;
  public type: String;
  public result: any;

  constructor(public navCtrl: NavController, private workoutService:WorkoutService) {

  }

  onSubmit() {
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    //Add Workout
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data;
    });

    this.navCtrl.push(WorkoutsPage);
  }



}