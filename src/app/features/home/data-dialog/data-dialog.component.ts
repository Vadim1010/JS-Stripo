import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './data-dialog.component.html',
  styleUrls: ['./data-dialog.component.scss'],
})
export class DataDialogComponent implements OnInit {
  public valueItem: string = '';
  public fontSizeItem: string = '';

  constructor(private dialogRef: MatDialogRef<DataDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public ngOnInit() {
    this.valueItem = this.data.target.innerText;
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

  // public onSave(): void {
  //   this.data.target.innerHTML = this.valueItem;
  //   this.data.item.modified = +new Date();
  //   this.data.target.setAttribute('style', `font-size:${this.fontSizeItem}`);
  //
  //   this.onNoClick();
  // }
}
