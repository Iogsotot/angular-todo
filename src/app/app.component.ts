import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-todo';
  tasks = [
    { description: 'eat', isDone: false },
    { description: 'pray', isDone: false },
    { description: 'love', isDone: false }
  ];

  checkedToggle(item: string) {
    let currentTaskIndex = this.tasks.findIndex(task => task.description === item);
    this.tasks[currentTaskIndex].isDone = !this.tasks[currentTaskIndex].isDone;
    console.log(currentTaskIndex, this.tasks);
  }
}
