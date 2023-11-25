import { Component, OnInit } from '@angular/core';
import { pc } from '../model/pc.model';
import { pcService } from '../services/pc.service';
import { Router } from '@angular/router';
import { Os } from "../model/os.model";


@Component({
    selector: 'app-add-pc',
    templateUrl: './add-pc.component.html'
})
export class AddpcComponent implements OnInit {

    newpc = new pc();

    oss!: Os[];
    newIdOs!: number;
    newos!: Os;


    constructor(private pcService: pcService, private router: Router,) {

    }

    ngOnInit(): void {
        this.oss = this.pcService.listeOss();
    }

    addpc() {
        this.newos = this.pcService.consulterOs(this.newIdOs);
        this.newpc.os = this.newos;
        this.pcService.ajouterpc(this.newpc);

        this.router.navigate(['pcs']);
    }

}
