import { Component, Input, OnInit } from '@angular/core';

import { UpdateGaleryService } from '../../services/update-galery.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(public updateGaleryService: UpdateGaleryService) { }

  ngOnInit(): void {
    this.getLinks()
  }

  rotate: number = this.updateGaleryService.rotate;


  links: string[] = [];

  // src = "https://picsum.photos/id/70/300/200"

  getLinks() {
    const numbersOfPhotos = 8;
    for (let i = 1; i <= numbersOfPhotos; i++) {
      const countOfPhoto = Math.floor(Math.random() * 55)+1;
      this.links.push('https://picsum.photos/id/' + countOfPhoto + '/300/200');
    }
    console.log(this.links);
  }

}
