import { Injectable } from '@angular/core';
import { pc } from '../model/pc.model';
import { Os } from "../model/os.model";


@Injectable({
  providedIn: 'root'
})
export class pcService {

  pcs: pc[]; //un tableau de pcs
  newpcs!: pc[]
  pc!: pc;
  oss: Os[];
  i = 0;

  constructor() {

    this.oss = [{ idOs: 1, nomOs: "Free Dos" },
    { idOs: 2, nomOs: "Windows 7" },
    { idOs: 3, nomOs: "Windows 8" },
    { idOs: 4, nomOs: "Windows 10" },
    { idOs: 5, nomOs: "Windows 11" }];

    this.pcs = [{ idpc: 1, nompc: "MSI GF 63", prixpc: 2000, Specs: "CPU : I5 11eme gen / GPU : GEOFORCE GT710 / 8GB RAM ", os: { idOs: 1, nomOs: "Free DOS" } },
    { idpc: 2, nompc: "HP ProBook G9", prixpc: 1400, Specs: "CPU : Rayzen 5 / GPU : GEOFORCE GTx1650 / 16GB RAM", os: { idOs: 2, nomOs: "Windows 7" } },
    { idpc: 3, nompc: "MSI Katana", prixpc: 3200, Specs: "CPU : I7 11eme / GPU : GEOFORCE RTX3060 / 32GB RAM", os: { idOs: 4, nomOs: "Windows 10" } }
    ];


  }

  consulterpc(id: number): pc {
    this.pc = this.pcs.find(p => p.idpc == id)!;
    return this.pc;
  }


  listepcs(): pc[] {
    return this.pcs;
  }

  ajouterpc(pc: pc) {
    this.pcs.push(pc);
  }
  supprimerpc(prod: pc) {
    const index = this.pcs.indexOf(prod, 0);
    if (index > -1) {
      this.pcs.splice(index, 1);
    }
  }
  updatepc(p: pc) {

    this.supprimerpc(p);
    this.ajouterpc(p);
    this.trierpcs();


  }
  trierpcs() {
    this.pcs = this.pcs.sort((n1, n2) => {
      if (n1.idpc! > n2.idpc!) {
        return 1;
      }
      if (n1.idpc! < n2.idpc!) {
        return -1;
      }
      return 0;
    });
  }

  listeOss(): Os[] {
    return this.oss;
  }
  consulterOs(id: number): Os {
    return this.oss.find(os => os.idOs == id)!;
  }

  rechercherParCategorie(idOs: number): pc[] {
    //console.log(idOs);
    this.newpcs = [];
    this.i = 0;
    for (this.i; this.i < this.pcs.length; this.i++) {
      //console.log(this.pcs[this.i].os.idOs);
      if (this.pcs[this.i].os.idOs == idOs) {
        this.newpcs.push(this.pcs[this.i]);
      }
    }

    return this.newpcs;
  }
  rechercherParNom(nom: string) {
    this.newpcs = [];
    this.i = 0;
    for (this.i; this.i < this.pcs.length; this.i++) {
      //console.log(this.pcs[this.i].os.idOs);
      if (this.pcs[this.i].nompc == nom) {
        this.newpcs.push(this.pcs[this.i]);
      }
    }

    return this.newpcs;

  }


}



