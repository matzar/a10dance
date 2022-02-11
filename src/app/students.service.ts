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

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}
}
