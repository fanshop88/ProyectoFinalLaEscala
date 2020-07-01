import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import swal from 'sweetalert2';
import { CuriosityService } from '../../shared/services/curiosity.service';
import { Curiosity } from '../../shared/model/curiosity';

@Component({
  selector: 'app-curiosity',
  templateUrl: './curiosity.component.html',
  styleUrls: ['./curiosity.component.scss']
})
export class CuriosityComponent implements OnInit {

  @Input() curiosity: Curiosity;

  curiosityList: Curiosity[];
  totalItems: number;
  loading: boolean;

  constructor(private curiosityService: CuriosityService) {
    this.curiosityList = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getCuriosities();
  }

  //Buscar todos los personajes
  private getCuriosities(): void {
    this.curiosityService.getCuriosities().pipe(take(1)).subscribe(resp => {
      this.curiosityList = resp;
      // this.curiosityList.forEach(element => { element.image = `https://diegochagas.com/saint-seiya-api/${element.image}` })
      this.totalItems = this.curiosityList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Fallo en el cosmos', 'Hubo una interrupción en el cosmos, intenta elevarlo nuevamente.', 'error');
    });
  }

}
