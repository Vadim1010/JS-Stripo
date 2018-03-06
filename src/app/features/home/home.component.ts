import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data$: any;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  public ngOnInit() {
    this.data$ = this.http.get('data');
  }

  public showDetail(idItem: number): void {
    this.router.navigate([`home/${idItem}`]);
  }
}
