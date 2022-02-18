import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';
import { ActionSheetController } from '@ionic/angular';

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

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      cssClass: 'my-custom-class',
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
            this.deleteStudent(student);
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
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }
}
