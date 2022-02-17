import { Component, OnInit } from '@angular/core';
import { StudentsService, Student } from '../students.service';

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
  // Marking the parameter private automatically exposes
  // the parameter as a member of the component class - it is a handy shortcut TypeScript provides.
  constructor(private studentService: StudentsService) {}

  // By default, the Roster Page implements Angular's `OnInit` interface,
  // which requires you to implement the `OnInit` Angular hook.
  ngOnInit() {
    this.students = this.studentService.getAllStudents();
  }

  setStudentStatus(student) {
    student.status = !student.status;
  }

  deleteStudent(student) {
    this.students.splice(this.students.indexOf(student), 1);
  }
}
