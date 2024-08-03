import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, MainComponent]
})
export class AppComponent {
  title = 'project-popup';
}
