"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_roster_roster_module_ts"],{

/***/ 5230:
/*!*************************************************!*\
  !*** ./src/app/roster/roster-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPageRoutingModule": () => (/* binding */ RosterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _roster_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roster.page */ 6813);




const routes = [
    {
        path: '',
        component: _roster_page__WEBPACK_IMPORTED_MODULE_0__.RosterPage
    }
];
let RosterPageRoutingModule = class RosterPageRoutingModule {
};
RosterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RosterPageRoutingModule);



/***/ }),

/***/ 6577:
/*!*****************************************!*\
  !*** ./src/app/roster/roster.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPageModule": () => (/* binding */ RosterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _roster_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roster-routing.module */ 5230);
/* harmony import */ var _roster_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roster.page */ 6813);







let RosterPageModule = class RosterPageModule {
};
RosterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _roster_routing_module__WEBPACK_IMPORTED_MODULE_0__.RosterPageRoutingModule
        ],
        declarations: [_roster_page__WEBPACK_IMPORTED_MODULE_1__.RosterPage]
    })
], RosterPageModule);



/***/ }),

/***/ 6813:
/*!***************************************!*\
  !*** ./src/app/roster/roster.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RosterPage": () => (/* binding */ RosterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_mateuszzaremba_Documents_learning_a10dance_node_modules_ngtools_webpack_src_loaders_direct_resource_js_roster_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./roster.page.html */ 8228);
/* harmony import */ var _roster_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roster.page.scss */ 6400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../students.service */ 9829);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);






let RosterPage = class RosterPage {
    // inject a reference to the StudentService into the
    // page's constructor.
    // Do it, by inserting a new private parameter
    // `studentService`, of type `StudentService.
    // Marking the parameter private or public
    // automatically exposes the parameter as a member of the component class - it is a handy shortcut TypeScript provides.
    constructor(actionSheetController, alertController, toastController, studentService) {
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.toastController = toastController;
        this.studentService = studentService;
        this.students = [];
    }
    // By default, the Roster Page implements Angular's `OnInit` interface,
    // which requires you to implement the `OnInit` Angular hook.
    ngOnInit() {
        this.students = this.studentService.getAllStudents();
    }
    setStudentStatus(student) {
        student.status = !student.status;
    }
    // DATABASE FUNCTIONS
    deleteStudent(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // this.students.splice(this.students.indexOf(students), 1);
            this.students = this.students.filter((el) => el.id !== student.id);
            this.presentToast(student);
        });
    }
    deleteStudents(toDelete) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            toDelete.forEach((studentToDelete) => (this.students = this.students.filter((el) => el.id !== studentToDelete.id)));
            this.presentToastWithOptions(toDelete);
        });
    }
    // ACTION SHEET
    presentActionSheet(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // The create function accepts an options object and returns a promise,
            // which resolves to the action sheet component itself.
            // This means you must await it, which means the presentActionSheet function has to be marked as async.
            const actionSheet = yield this.actionSheetController.create({
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
            yield actionSheet.present();
            const { role, data } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role and data', role, data);
        });
    }
    // ALERTS
    presentDeleteAlert(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
    }
    presentDeleteManyAlert(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const input = [];
            const toDelete = [];
            this.students.forEach((el) => input.push({
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
            }));
            console.log(input);
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
    }
    presentDeleteChooseAlert(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const input = [];
            let toDelete = student;
            this.students.forEach((el) => input.push({
                name: `${el.firstName} ${el.lastName}`,
                type: 'radio',
                label: `${el.firstName} ${el.lastName}`,
                value: `${el.firstName} ${el.lastName}`,
                handler: () => {
                    toDelete = el;
                    console.log(`${toDelete.firstName} ${toDelete.lastName} selected to delete`);
                },
                checked: false,
            }));
            console.log(input);
            const alert = yield this.alertController.create({
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
            yield alert.present();
        });
    }
    // TOASTS
    presentToast(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: `${student.firstName} ${student.lastName} deleted.`,
                color: 'danger',
                duration: 2000,
                translucent: true,
                animated: true,
                icon: 'warning',
                // If true, the keyboard will be automatically dismissed when the overlay is presented.
                keyboardClose: true,
            });
            toast.present();
        });
    }
    presentToastWithOptions(toDelete) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Deleted students:',
                message: toDelete
                    .map((el) => ` ${el.firstName} ${el.lastName}`)
                    .toString(),
                icon: 'information-circle',
                position: 'top',
                color: 'warning',
                // no duration attribute so the toast will have to dismissed by the user by clicking some of the buttons.
                buttons: [
                    // {
                    //   side: 'start',
                    //   icon: 'share',
                    //   text: 'Share',
                    //   handler: () => {
                    //     console.log('Share clicked');
                    //   },
                    // },
                    {
                        text: 'Done',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        },
                    },
                ],
            });
            yield toast.present();
            const { role } = yield toast.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
};
RosterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ActionSheetController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _students_service__WEBPACK_IMPORTED_MODULE_2__.StudentsService }
];
RosterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-roster',
        template: _Users_mateuszzaremba_Documents_learning_a10dance_node_modules_ngtools_webpack_src_loaders_direct_resource_js_roster_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_roster_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RosterPage);



/***/ }),

/***/ 9829:
/*!*************************************!*\
  !*** ./src/app/students.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentsService": () => (/* binding */ StudentsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


const mockStudents = [
    { id: '1', firstName: 'Greg', lastName: 'Marine', status: true },
    { id: '2', firstName: 'Jonathan', lastName: 'Bennett', status: true },
    { id: '3', firstName: 'Neil', lastName: 'Estandarte', status: true },
    { id: '4', firstName: 'Jen', lastName: 'Townsend', status: false },
    { id: '5', firstName: 'Casey', lastName: 'McBride', status: true },
    { id: '6', firstName: 'Diane', lastName: 'Rivera', status: false },
    { id: '7', firstName: 'Troy', lastName: 'Gutierrez', status: false },
    { id: '8', firstName: 'Priscilla', lastName: 'Little', status: true },
    { id: '9', firstName: 'Bobby', lastName: 'Robbins', status: true },
    { id: '10', firstName: 'Edmund', lastName: 'Gardner', status: true },
];
let StudentsService = class StudentsService {
    constructor() { }
    getAllStudents() {
        // ... is a shorthand for making a shallow copy of an array.
        return [...mockStudents];
    }
};
StudentsService.ctorParameters = () => [];
StudentsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        // When you provide the service to a root injector,
        // that instance of the service is shared and available
        // in every class that needs the service.
        // This is ideal when a service is sharing methods or state.
        providedIn: 'root',
    })
], StudentsService);



/***/ }),

/***/ 8228:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/roster/roster.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title><ion-icon icon=\"school\"></ion-icon> Class Roster</ion-title>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"home\" text=\"home\" icon=\"airplane\">\n          </ion-back-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let student of students\">\n      <ion-item>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"presentActionSheet(student)\">\n            <ion-icon\n              slot=\"icon-only\"\n              ios=\"ellipsis-horizontal\"\n              md=\"ellipsis-vertical\"\n            ></ion-icon>\n          </ion-button>\n          <ion-button>\n            <ion-icon\n              slot=\"icon-only\"\n              name=\"chevron-forward-outline\"\n            ></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <!-- ion-icon and ion-label are siblings here -->\n        <ion-icon slot=\"start\" icon=\"person\"></ion-icon>\n\n        <ion-label (click)=\"presentActionSheet(student)\">\n          {{student.firstName}} {{student.lastName}}\n        </ion-label>\n        <ion-icon\n          *ngIf=\"student.status===true\"\n          slot=\"end\"\n          icon=\"eye\"\n          (click)=\"setStudentStatus(student)\"\n        ></ion-icon>\n        <ion-icon\n          *ngIf=\"student.status===false\"\n          slot=\"end\"\n          icon=\"eye-off\"\n          (click)=\"setStudentStatus(student)\"\n        ></ion-icon>\n      </ion-item>\n      <ion-item-options (ionSwipe)=\"deleteStudent(student)\" side=\"end\">\n        <ion-item-option\n          color=\"danger\"\n          expandable=\"false\"\n          (click)=\"deleteStudent(student)\"\n          >Delete</ion-item-option\n        >\n      </ion-item-options>\n      <ion-item-options side=\"start\" (ionSwipe)=\"setStudentStatus(student)\">\n        <ion-item-option color=\"success\" expandable=\"true\">\n          <!-- <ion-icon icon=\"star\" (click)=\"setStudentStatus(student)\"></ion-icon> -->\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 6400:
/*!*****************************************!*\
  !*** ./src/app/roster/roster.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXIucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_roster_roster_module_ts.js.map