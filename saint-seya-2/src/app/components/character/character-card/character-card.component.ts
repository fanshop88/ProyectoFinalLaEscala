import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../../shared/model/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: Character;
  path = 'detail';

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }

  moreInformation(id) {
    this.router.navigate([`/personaje/${this.path}/${id}`] )
  }

}
