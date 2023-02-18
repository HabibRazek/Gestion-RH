import { PosteService } from './../service/poste.service';
import { Poste } from './../../model/Poste.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/model/Employe.model';
import { EmployeService } from '../service/employe.service';


@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  newEmploye = new Employe();
  employes!: Employe[];
  postes!: Poste[];

  newIdPos! : number;
  newPoste! : Poste;
  constructor(private employeService:EmployeService,
    private router:Router,
    private posteService : PosteService) { }

  ngOnInit(): void {
    this.employeService.listEmploye().subscribe(data =>
      {this.employes = data;
      console.log(data);
    })
    this.posteService.listPoste().subscribe(data =>{
      this.postes = data;
      console.log(data);
    })}
    addEmploye(){
      this.newEmploye.poste=this.postes.find(cat => cat.idPos == this.newIdPos)!;
      this.employeService.addEmploye(this.newEmploye).
      subscribe(data => {console.log(data);
      this.router.navigate(['employes']);
    });
    }}
