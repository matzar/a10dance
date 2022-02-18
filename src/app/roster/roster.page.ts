import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';
import {
  ActionSheetController,
  AlertController,
  ToastController,
} from '@ionic/angular';

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
    public toastController: ToastController,
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

  // DATABASE FUNCTIONS
  async deleteStudent(student: Student) {
    // this.students.splice(this.students.indexOf(students), 1);
    this.students = this.students.filter((el) => el.id !== student.id);
    this.presentToast(student);
  }

  async deleteStudents(toDelete: Student[]) {
    toDelete.forEach(
      (studentToDelete) =>
        (this.students = this.students.filter(
          (el) => el.id !== studentToDelete.id
        ))
    );
    this.presentToastWithOptions(toDelete);
  }

  // ACTION SHEET
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
          text: 'Delete Many',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-many-button',
          data: {
            type: 'delete',
          },
          handler: () => {
            console.log('Delete Many clicked');
            this.presentDeleteManyAlert(student);
          },
        },
        {
          text: 'Delete Choose',
          role: 'destructive',
          icon: 'trash',
          id: 'delete-choose-button',
          data: {
            type: 'delete',
          },
          handler: () => {
            console.log('Delete Choose clicked');
            this.presentDeleteChooseAlert(student);
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

  // ALERTS
  async presentDeleteAlert(student: Student) {
    const alert = await this.alertController.create({
      header: 'Delete student?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'This operation cannot be undone.',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            this.deleteStudent(student);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  async presentDeleteManyAlert(student: Student) {
    const input = [];
    const toDelete: Student[] = [];

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
      subHeader: '',
      message: 'This operation cannot be undone.',
      inputs: input,
      buttons: [
        {
          text: 'Delete many',
          role: 'desctuctive',
          handler: () => {
            this.deleteStudents(toDelete);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  async presentDeleteChooseAlert(student: Student) {
    const input = [];
    let toDelete: Student = student;

    this.students.forEach((el: Student) =>
      input.push({
        name: `${el.firstName} ${el.lastName}`,
        type: 'radio',
        label: `${el.firstName} ${el.lastName}`,
        value: `${el.firstName} ${el.lastName}`,
        handler: () => {
          toDelete = el;
          console.log(
            `${toDelete.firstName} ${toDelete.lastName} selected to delete`
          );
        },
        checked: false,
      })
    );

    console.log(input);

    const alert = await this.alertController.create({
      header: 'Delete student?',
      subHeader: '',
      message: 'This operation cannot be undone.',
      inputs: input,
      buttons: [
        {
          text: 'Delete',
          role: 'desctuctive',
          handler: () => {
            this.deleteStudent(toDelete);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }

  // TOASTS
  async presentToast(student) {
    const toast = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} deleted.`,
      duration: 2000,
    });
    toast.present();
  }

  async presentToastWithOptions(toDelete: Student[]) {
    const toast = await this.toastController.create({
      header: 'Deleted students:',
      message: toDelete
        .map((el) => ` ${el.firstName} ${el.lastName}`)
        .toString(),
      icon: 'information-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'share',
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
