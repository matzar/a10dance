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

// The purpose of interface is typechecking and code completion
export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  gender?: string;
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
  status?: true | false;
}

const mockStudents: Student[] = [
  {
    id: '1',
    firstName: 'Greg',
    lastName: 'Marine',
    gender: 'male',
    status: true,
  },
  {
    id: '2',
    firstName: 'Jonathan',
    lastName: 'Bennett',
    gender: 'male',
    status: true,
  },
  {
    id: '3',
    firstName: 'Neil',
    lastName: 'Estandarte',
    gender: 'male',
    status: true,
  },
  {
    id: '4',
    firstName: 'Jen',
    lastName: 'Townsend',
    gender: 'female',
    status: false,
  },
  {
    id: '5',
    firstName: 'Casey',
    lastName: 'McBride',
    gender: 'female',
    status: true,
  },
  {
    id: '6',
    firstName: 'Diane',
    lastName: 'Rivera',
    gender: 'female',
    status: false,
  },
  {
    id: '7',
    firstName: 'Troy',
    lastName: 'Gutierrez',
    gender: 'male',
    status: false,
  },
  {
    id: '8',
    firstName: 'Priscilla',
    lastName: 'Little',
    gender: 'female',
    status: true,
  },
  {
    id: '9',
    firstName: 'Bobby',
    lastName: 'Robbins',
    gender: 'male',
    status: true,
  },
  {
    id: '10',
    firstName: 'Edmund',
    lastName: 'Gardner',
    gender: 'male',
    status: true,
  },
];

@Injectable({
  // When you provide the service to a root injector,
  // that instance of the service is shared and available
  // in every class that needs the service.
  // This is ideal when a service is sharing methods or state.
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  getAllStudents() {
    // ... is a shorthand for making a shallow copy of an array.
    return [...mockStudents];
  }
}
