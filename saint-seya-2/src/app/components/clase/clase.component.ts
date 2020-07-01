import { Component, OnInit, Input } from '@angular/core';
import { take } from 'rxjs/operators';
import swal from 'sweetalert2';
import { ClaseService } from '../../shared/services/clase.service';
import { Clase } from '../../shared/model/clase';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent implements OnInit {

  @Input() clase: Clase;

  claseList: Clase[];
  pageSize: number;
  page: number;
  totalItems: number;
  loading: boolean;
  claseName: Clase[];
  claseListComplete: Clase[];

  constructor(private claseService: ClaseService) {
    this.page = 1;
    this.pageSize = 9;
    this.claseList = [];
    this.loading = true;
  }

  ngOnInit() {
    this.getAllClasses();
    this.getClassNames();
  }

  //Buscar todos los personajes
  private getAllClasses(): void {
    this.claseService.getAllClasses().pipe(take(1)).subscribe(resp => {
      this.claseList = resp;
      this.claseListComplete = resp;
      this.claseList.forEach(element => { element.image = `https://diegochagas.com/saint-seiya-api/${element.image}` })
      this.totalItems = this.claseList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Fallo en el cosmos', 'Hubo una interrupción en el cosmos, intenta elevarlo nuevamente.', 'error');
    });
  }

  private getClassNames (){
    this.claseService.getClassNames().subscribe(resp => {
      this.claseName = resp;
    })
  }

  public getClassByName(name: MatSelectChange){
      let format;
      format = name.value.toLowerCase().replace(' ', '-'); 
      this.claseService.getClassByName(format).pipe(take(1)).subscribe(resp => {
      this.claseList = resp;
      this.claseList.forEach(element => { element.image = `https://diegochagas.com/saint-seiya-api/${element.image}` })
      this.totalItems = this.claseList.length;
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
