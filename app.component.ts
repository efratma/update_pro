import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ExerciseService } from './exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

  export class AppComponent {
    solvedExercises: any[] = [];

    constructor(private authService: AuthService, private router: Router,private exerciseService: ExerciseService) { }

    logout(): void {
      this.authService.logout();
      this.router.navigate(['/logged-out']);
    }

    fetchMyExercises() {
      this.exerciseService.retrieveSolvedExercises().subscribe((exercises: any) => {
        this.solvedExercises = exercises;
        // Navigate to a dedicated page to display the solved exercises.
        this.router.navigate(['/solved-problems']);
      });
    }

  }
