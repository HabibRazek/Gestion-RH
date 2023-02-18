import { Conge } from 'src/model/Conge.model';
import { CongeService } from './../service/conge.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-conges',
  templateUrl: './mes-conges.component.html',
  styleUrls: ['./mes-conges.component.css']
})
export class MesCongesComponent implements OnInit {

  conges!: Conge[];
  constructor(private congeService : CongeService) { }

  ngOnInit(): void {
    this.congeService.listConge().subscribe(
      (data) => { this.conges = data;
        console.log(this.conges);
  })
  }

}
