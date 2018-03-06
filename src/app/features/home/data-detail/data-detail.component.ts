import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { DataDialogComponent } from '../data-dialog';

@Component({
  selector: 'tt-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DataDetailComponent implements OnInit, OnDestroy {
  public dataItem;

  private subscriptions: Subscription[] = [];

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  public showDialog(event): void {
    const classItem: string = event.target.className;

    if (classItem === 'editable') {
      this.openDialog(event);
    }
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.route.paramMap
      .subscribe((params: ParamMap) => {
        let selectedId: number;

        selectedId = +params.get('id');

        this.getItem(selectedId);
      }));
  }

  public ngOnDestroy() {
    if (this.subscriptions.length) {
      this.subscriptions.forEach((elem) => {
        elem.unsubscribe();
      });
    }
  }

  private openDialog(event): void {
    const dialogRef = this.dialog.open(DataDialogComponent, {
      width: '350px',
      data: {
        target: event.target,
        item: this.dataItem
      }
    });

    this.subscriptions.push(dialogRef.afterClosed().subscribe((value) => {
      if (value) {
        this.changeData(value, event);
      }
    }));
  }

  private changeData(data: any, event): void {
    this.dataItem.modified = +new Date();
    event.target.innerHTML = data.value;
    event.target.setAttribute('style', `font-size:${data.size}px`);

    event.path.forEach((elem) => {
      if (elem.className === 'data-detail__template') {
        this.dataItem.template = elem.innerHTML;
      }
    });

    this.setItem();
  }

  private getItem(id) {
    this.subscriptions.push(this.http.get(`data/${id}`)
      .subscribe(
        (data) => {
          this.dataItem = data;
        }
      ));
  }

  private setItem() {
    this.subscriptions.push(this.http.put(`data/${this.dataItem.id}`, this.dataItem)
      .subscribe(() => {
        console.log('Updated');
      })
    );
  }
}
