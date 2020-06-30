import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Debut } from '../../../shared/model/debut';

@Component({
  selector: 'app-debut-card',
  templateUrl: './debut-card.component.html',
  styleUrls: ['./debut-card.component.scss']
})
export class DebutCardComponent implements OnInit {

  @Input() debut: Debut;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
