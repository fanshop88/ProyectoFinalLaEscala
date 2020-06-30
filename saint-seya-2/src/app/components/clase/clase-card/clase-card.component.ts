import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Clase } from '../../../shared/model/clase';

@Component({
  selector: 'app-clase-card',
  templateUrl: './clase-card.component.html',
  styleUrls: ['./clase-card.component.scss']
})
export class ClaseCardComponent implements OnInit {

  @Input() clase: Clase;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
