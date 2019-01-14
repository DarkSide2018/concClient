import { Component } from '@angular/core';
import {AppVars} from "./appVars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title;
  private _showData:boolean;
  constructor() {
    this.title = 'client';
    this._showData = true;
  }

  get showData(): boolean {
    return this._showData;
  }

  set showData(value: boolean) {
    this._showData = value;
  }
}
