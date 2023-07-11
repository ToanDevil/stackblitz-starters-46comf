import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
@Component({
  selector: 'app-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./app.component.html`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
