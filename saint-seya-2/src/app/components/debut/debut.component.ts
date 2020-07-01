import { Component, OnInit, Input } from '@angular/core';
import { take, map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { DebutService } from '../../shared/services/debut.service';
import { Debut } from '../../shared/model/debut';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-debut',
  templateUrl: './debut.component.html',
  styleUrls: ['./debut.component.scss']
})
export class DebutComponent implements OnInit {

  @Input() debut: Debut;

  debutList: Debut[];
  debutSetList: Debut[];
  pageSize: number;
  page: number;
  totalItems: number;
  loading: boolean;

  constructor(private debutService: DebutService) {
    this.page = 1;
    this.pageSize = 6;
    this.debutList = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getDebuts();
  }

  //Buscar y mostrar todos
  private getDebuts(): void {
    this.debutService.getDebuts().pipe(take(1)).subscribe(resp => {
      this.debutList = resp;
      this.debutSetList = resp;
      this.debutList.forEach(element => {element.image = `https://diegochagas.com/saint-seiya-api/${element.image}` })
      this.totalItems = this.debutList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Fallo en el cosmos', 'Hubo una interrupción en el cosmos, intenta elevarlo nuevamente.', 'error');
    });
  }

  //Filtro
  public getDebut(name: MatSelectChange){
    if(name.value == 'all') {
      this.getDebuts();
      return;
    }
    let format;
    format = name.value.toLowerCase().replace(' ', '-'); 
    this.debutService.getDebut(format).pipe(take(1)).subscribe(resp => {
      this.debutList = [resp];
      this.debutList.forEach(element => {element.image = `https://diegochagas.com/saint-seiya-api/${element.image}` })
      this.totalItems = this.debutList.length;
      this.loading = false;
    },
  error => {
    swal.fire('Fallo en el cosmos', 'Hubo una interrupción en el cosmos, intenta elevarlo nuevamente.', 'error');
  });
}


  pageChanged(page: number): void {
    this.page = page;
  }

}
