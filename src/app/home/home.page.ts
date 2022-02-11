import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];

  public num: number;
  public col = 'light';

  constructor() {
    const numbers = timer(10, 1000);
    numbers.subscribe((n) => {
      this.num = n / 100;
      console.log(this.num);

      if (this.num > 0.029 && this.num < 0.059) {
        this.col = 'medium';
      }

      if (this.num > 0.059 && this.num < 0.099) {
        this.col = 'dark';
      }

      if (this.num === 0.1) {
        this.col = 'success';
      }
    });
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.form.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
