import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Adem Basoglu - Games');
  }
}
