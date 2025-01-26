import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {ButtonModule} from  'primeng/button';
import { fontawesomeicons } from './shared/font-awesome-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  faIcon:FaIconLibrary=inject(FaIconLibrary);

  ngOnInit(): void {
    this.initfontawesome();
  }
  private initfontawesome():void{
    this.faIcon.addIcons(...fontawesomeicons);
  }
}
