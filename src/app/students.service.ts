import { Injectable } from '@angular/core';

/**
 * Create a Student object as an interface.
 * Remember, interfaces do not exist in JavaScript,
 * and will completely vanish upon build.
 * Their sole purpose for us is to:
 * - enable parameter type checking,
 * - code completion,
 * - and intellisense inside the code editor.
 */

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  /**
   * This line indicates that the status field is an optional string value,
   * which may only contain one of two values: present or absent.
   * Though this will not be enforced at runtime,
   * the TypeScript compiler will prevent you from assigning any other value.
   */
  status?: 'present' | 'absent';
}

const mockStudents: Student[] = [
  { id: '1', firstName: 'Greg', lastName: 'Marine' },
  { id: '2', firstName: 'Jonathan', lastName: 'Bennett' },
  { id: '3', firstName: 'Neil', lastName: 'Estandarte' },
  { id: '4', firstName: 'Jen', lastName: 'Townsend' },
  { id: '5', firstName: 'Casey', lastName: 'McBride' },
  { id: '6', firstName: 'Diane', lastName: 'Rivera' },
  { id: '7', firstName: 'Troy', lastName: 'Gutierrez' },
  { id: '8', firstName: 'Priscilla', lastName: 'Little' },
  { id: '9', firstName: 'Bobby', lastName: 'Robbins' },
  { id: '10', firstName: 'Edmund', lastName: 'Gardner' },
];

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  getAll() {
    // ... is a shorthand for making a shallow copy of an array.
    return [...mockStudents];
  }
}
