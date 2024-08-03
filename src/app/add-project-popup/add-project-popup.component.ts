import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-project-popup',
  templateUrl: './add-project-popup.component.html',
  styleUrls: ['./add-project-popup.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule
  ]
})
export class AddProjectPopupComponent {
  projectCatalogNumber: string = '';
  artist: string = '';
  projectTitle: string = '';
  label: string = '';
  albumType: string = '';
  labels: string[] = ['Label1', 'Label2', 'Label3', 'Label4', 'Label5'];

  onCancel(): void {
    // Logic for cancel button
  }

  onAddProject(): void {
    // Logic for add project button
  }

  formValid(): boolean {
    return !!this.projectCatalogNumber && !!this.artist && !!this.projectTitle && !!this.label && !!this.albumType;
  }
}
