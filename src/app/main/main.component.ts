import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectPopupComponent } from '../add-project-popup/add-project-popup.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
})
export class MainComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddProjectPopupComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container'
    });
  }
}
