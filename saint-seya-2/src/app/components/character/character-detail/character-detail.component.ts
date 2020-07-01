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
      swal.fire('Interrupcion en el cosmos', 'Eleve su cosmo nuevamente.', 'error');
    });
  }

}