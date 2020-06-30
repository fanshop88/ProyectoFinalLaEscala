import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../../shared/services/characters.service';
import { Character } from '../../../shared/model/character';
import swal from 'sweetalert2';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  loading: boolean;
  character: Character;

  constructor(private route: ActivatedRoute, private router: Router, private charactersService: CharactersService) { 
    this.loading = true;
    this.character = null;
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.findCharacterById(id);
  }

  onBack() {
    this.router.navigate(['/personaje'] )
  }

  private findCharacterById(id: number): void {
    
    this.charactersService.findCharacterById(id).pipe(take(1)).subscribe(resp => {
      this.character = resp;
      this.character.image = `https://diegochagas.com/saint-seiya-api/${resp.image}`;
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });

    if (isNaN(id) || id === null || id <= 0) {
      swal.fire('La ID ingresa no es válida', 'Asegurate ingresando desde la botón ver más en las tarjetas de los personajes', 'error');
      this.router.navigate(['character-not-found'] )
      return;
    }

  }

}