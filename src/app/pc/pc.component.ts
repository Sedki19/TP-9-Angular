import { Component, OnInit } from '@angular/core';
import { pc } from '../model/pc.model';
import { pcService } from '../services/pc.service';
import { AuthService } from '../services/auth.service';
import { Os } from '../model/os.model';

@Component({
  selector: 'app-pcs',
  templateUrl: './pc.component.html'
})
export class pcsComponent implements OnInit {

  pcs?: pc[]; //un tableau de pcs


  constructor(private pcService: pcService, public authService: AuthService) {
    //this.pcs=[];
  }

  supprimerpc(p: pc) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.pcService.supprimerpc(p);


  }


  ngOnInit(): void {

    this.pcs = this.pcService.listepcs();

  }

}
