import { Employe } from 'src/model/Employe.model';
import { EmployeService } from './../service/employe.service';
import { CongeService } from './../service/conge.service';
import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/model/Conge.model';
import {Router } from '@angular/router';

@Component({
  selector: 'app-conge-en-attente',
  templateUrl: './conge-en-attente.component.html',
  styleUrls: ['./conge-en-attente.component.css']
})
export class CongeEnAttenteComponent implements OnInit {

  conges!: Conge[];
  newConge= new Conge;
  employes!: Employe[];
  constructor(private congeService : CongeService,
    private router : Router,
    private employeService : EmployeService) { }

  ngOnInit(): void {
    this.congeService.listConge().subscribe(
      (data) => { this.conges = data;
        console.log(this.conges);
  })
  this.employeService.listEmploye().subscribe(
    (data) => { this.employes = data;
      console.log(this.employes);
})

  }
  deletcon(id:number){
    this.congeService.deleteConge(id).subscribe((data)=>{
      console.log(data);
  this.congeService.listConge().subscribe((data)=>
    {
      this.conges=data;
      console.log(this.conges);
 
    });
  });}
  setStatus(con: Conge){
    con.statusCon="valide";
}
  modif(id : number){
    this.congeService.getCongeById(id).subscribe(data =>  {this.setStatus(data),
      this.congeService.updateConge(data).subscribe
      (data => {console.log(data); 
        window.location.reload();

  });
    } )

  }}


