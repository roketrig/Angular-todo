import { Component } from '@angular/core';
import { TodoComponent } from './components/todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { }
