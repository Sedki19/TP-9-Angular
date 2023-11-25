import { Component } from '@angular/core';
import { pc } from '../model/pc.model';
import { pcService } from '../services/pc.service';
import { Os } from '../model/os.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-par-os',
  templateUrl: './recherche-par-os.component.html',

})
export class RechercheParOsComponent {
  pcs !: pc[];
  i = 0;
  oss !: Os[];
  newIdOs!: number;


  ngOnInit(): void {

    this.oss = this.pcService.listeOss();




  }
  constructor(private pcService: pcService, private router: Router) {
    /*this.pcs = [{ idpc: 1, nompc: "MSI GF 63", prixpc: 2000, Specs: "CPU : I5 11eme gen / GPU : GEOFORCE GT710 / 8GB RAM ", os: { idOs: 1, nomOs: "Free DOS" } }];
  */}



  onChange(): void {
    this.pcs = this.pcService.rechercherParCategorie(this.newIdOs);




  }
}
