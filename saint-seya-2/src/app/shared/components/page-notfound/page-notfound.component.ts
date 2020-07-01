import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-notfound',
  templateUrl: './page-notfound.component.html',
  styleUrls: ['./page-notfound.component.scss']
})
export class PageNotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver() {
    this.router.navigate([`/home`] )
  }

}
