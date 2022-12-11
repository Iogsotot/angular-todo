import { Component, Input } from '@angular/core';

interface ITask {
  description: string;
  isDone: boolean
}

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})

export class AddTaskComponent {

  @Input() tasks!: ITask[];
  @Input() buttonTitle!: string;
  @Input() inputValue!: string;


  addNewTask(item: string) {
    if (!!item) {
      this.tasks.push({ description: item, isDone: false });
      console.log(this.tasks, item);
    }
  }

}
