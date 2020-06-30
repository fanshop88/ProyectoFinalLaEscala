import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import swal from 'sweetalert2';
import { CharactersService } from '../../shared/services/characters.service';
import { Character } from '../../shared/model/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  characterList: Character[];
  pageSize: number;
  page: number;
  totalItems: number;
  loading: boolean;

  constructor(private characterService: CharactersService) {
    this.page = 1;
    this.pageSize = 9;
    this.characterList = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getAllCharacters();
  }

  //Buscar todos los personajes
  private getAllCharacters(): void {
    this.characterService.getAllCharacters().pipe(take(1)).subscribe(resp => {
      this.characterList = resp;
      this.characterList.forEach(element => { element.image = `https://diegochagas.com/saint-seiya-api/${element.image}` })
      this.totalItems = this.characterList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Fallo en el cosmos', 'Hubo una interrupción en el cosmos, intenta elevarlo nuevamente.', 'error');
    });
  }

  pageChanged(page: number): void {
    this.page = page;
  }

  filterByName(name: any){
    this.characterList = this.characterList.filter(cls => {
      cls.name.includes(name.srcElement.value);
    });
  }

}
