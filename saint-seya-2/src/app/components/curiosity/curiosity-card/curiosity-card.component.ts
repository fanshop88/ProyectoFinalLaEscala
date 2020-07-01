import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Curiosity } from '../../../shared/model/curiosity';
import { Character } from '../../../shared/model/character';
import { CharactersService } from '../../../shared/services/characters.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-curiosity-card',
  templateUrl: './curiosity-card.component.html',
  styleUrls: ['./curiosity-card.component.scss']
})
export class CuriosityCardComponent implements OnInit {

  @Input() curiosity: Curiosity = new Curiosity();
  @Input() character: Character = new Character();
  
  characterList: Character[];

  totalItems: number;
  loading: boolean;

  constructor(private router: Router, private characterService: CharactersService) { }

  ngOnInit() {
    this.findCharacterById(this.curiosity.id);
  }

  private findCharacterById(id: number): void {
    
    this.characterService.findCharacterById(id).pipe(take(1)).subscribe(resp => {
      this.character = resp;
      this.character.image = `https://diegochagas.com/saint-seiya-api/${resp.image}`;
      this.loading = false;
    })
  }

}
