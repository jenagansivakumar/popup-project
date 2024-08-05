import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-project-popup',
  templateUrl: './add-project-popup.component.html',
  styleUrls: ['./add-project-popup.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule
  ]
})
export class AddProjectPopupComponent {
  projectCatalogNumber: string = '';
  artist: string = '';
  projectTitle: string = '';
  label: string = '';
  albumType: string = '';
  labels: string = "";

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
