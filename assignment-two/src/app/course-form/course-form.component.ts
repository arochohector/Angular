import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categories = [
    {id: 1, name: 'Art'},
    {id: 2, name: 'Development'},
    {id: 3, name: 'Languages'}
  ]
  constructor() { }

}
