import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  courses = [2, 3, 4, 6];
  viewMode = 'map';
  //viewMode = 'something';
}
