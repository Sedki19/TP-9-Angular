import { Component } from '@angular/core';
import { pc } from '../model/pc.model';
import { pcService } from '../services/pc.service';


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  pcs !: pc[];
  allpcs !: pc[];
  nompc: any;
  searchTerm!: string;


  constructor(private pcService: pcService) { }



  ngOnInit(): void {

    this.pcs = this.pcService.listepcs();

  }
  onKeyUp(filterText: string) {
    this.pcs = this.allpcs.filter(item =>
      item.nompc.toLowerCase().includes(filterText));
  }



}
