import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conge } from 'src/model/Conge.model';
import { CongeService } from '../service/conge.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {

  
  conges!: Conge[];
  newConge = new Conge;
  constructor(private congeService: CongeService,
    private router : Router) { }

  ngOnInit(): void {
  }
  addConge(){
    this.congeService.addConge(this.newConge).
    subscribe(data => {console.log(data);
      this.router.navigate(['congeAttente']);
    });
  }

}
