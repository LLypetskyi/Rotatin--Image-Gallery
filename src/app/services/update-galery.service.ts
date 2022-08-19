import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateGaleryService {

  rotate = 0;

  constructor() { }

  prevEl() {
    this.rotate = this.rotate + 45;
  }

  nextEl() {
    this.rotate = this.rotate - 45;
  }
}




