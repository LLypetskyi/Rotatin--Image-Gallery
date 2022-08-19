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
  }
  
  rotate: number = this.updateGaleryService.rotate;


 





}
