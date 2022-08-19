import { Component, OnInit } from '@angular/core';
import { UpdateGaleryService } from 'src/app/services/update-galery.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor(private updateGaleryService: UpdateGaleryService) { }

  ngOnInit(): void {
  }
 
  showNext() {
    this.updateGaleryService.nextEl();
  }

  showPrev() {
    this.updateGaleryService.prevEl();
  }

}
