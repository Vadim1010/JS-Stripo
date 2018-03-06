import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home.component';
import { DataDetailComponent } from './data-detail';
import { DataDialogComponent } from './data-dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule
  ],
  declarations: [
    HomeComponent,
    DataDetailComponent,
    DataDialogComponent
  ],
  exports: [
    HomeComponent,
  ],
  entryComponents: [DataDialogComponent]
})
export class HomeModule {
}
