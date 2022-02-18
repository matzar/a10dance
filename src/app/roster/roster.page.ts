import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  students: Student[] = [];

  // inject a reference to the StudentService into the
  // page's constructor.
  // Do it, by inserting a new private parameter
  // `studentService`, of type `StudentService.
  // Marking the parameter private or public
  // automatically exposes the parameter as a member of the component class - it is a handy shortcut TypeScript provides.
  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    private studentService: StudentsService
  ) {}

  // By default, the Roster Page implements Angular's `OnInit` interface,
  // which requires you to implement the `OnInit` Angular hook.
  ngOnInit() {
    this.students = this.studentService.getAllStudents();
  }

  setStudentStatus(student) {
    student.status = !student.status;
  }

  deleteStudent(student): Student[] {
    this.students.splice(this.students.indexOf(student), 1);
    return student;
  }

  async presentActionSheet(student: Student): Promise<void> {
    // The create function accepts an options object and returns a promise,
    // which resolves to the action sheet component itself.
    // This means you must await it, which means the presentActionSheet function has to be marked as async.
    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      cssClass: 'list-roster',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-button',
          data: {
            type: 'delete',
          },
          handler: () => {
            console.log('Delete clicked');
            this.presentDeleteAlert(student);
          },
        },
        {
          text: student.status ? 'Absent' : 'Present',
          icon: student.status ? 'eye-off' : 'eye',
          id: 'mark-present',
          handler: () => {
            this.setStudentStatus(student);
          },
        },
        {
          text: 'Share',
          icon: 'share',
          data: 10,
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle',
          data: 'Data value',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    // Once you have a reference to the action sheet component,
    // you can display it by calling its present function.
    // This function also returns a promise, so you may wish to await that call also.
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  async presentDeleteAlert(student: Student) {
    const input = [];
    const toDelete = [];

    this.students.forEach((el: Student) =>
      input.push({
        name: `${el.firstName} ${el.lastName}`,
        type: 'checkbox',
        label: `${el.firstName} ${el.lastName}`,
        value: `${el.firstName} ${el.lastName}`,
        handler: () => {
          console.log(`${el.firstName} ${el.lastName} selected`);
          toDelete.push(el);
          console.log(toDelete);
        },
        checked: false,
      })
    );

    console.log(input);

    const alert = await this.alertController.create({
      header: 'Delete student?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'This operation cannot be undone.',
      inputs: input,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => this.deleteStudent(student),
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
}
