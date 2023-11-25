import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pcService } from '../services/pc.service';
import { pc } from '../model/pc.model';
import { Os } from "../model/os.model";


@Component({
  selector: 'app-update-pc',
  templateUrl: './update-pc.component.html',

})
export class UpdatepcComponent {
  currentpc = new pc();

  oss!: Os[];
  updatedOsId!: number;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private pcService: pcService,
  ) { }
  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.oss = this.pcService.listeOss();
    this.currentpc = this.pcService.consulterpc(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentpc);
    this.updatedOsId = this.currentpc.os.idOs;
  }


  updatepc() {
    //console.log(this.currentpc);
    this.currentpc.os = this.pcService.consulterOs(this.updatedOsId);

    this.pcService.updatepc(this.currentpc);
    this.router.navigate(['pcs']);
  }




}
