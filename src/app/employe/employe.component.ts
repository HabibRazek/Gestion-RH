import { Employe } from './../../model/Employe.model';
import { EmployeService } from './../service/employe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poste } from 'src/model/Poste.model';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes!: Employe[];
  postes!: Poste[];
  cin! : number;
  constructor(private employeService:EmployeService,private router:Router) { }

  ngOnInit(): void {
    this.employeService.listEmploye().subscribe(
      (data)=> {this.employes = data;
      console.log(this.employes);
    })
    this.employeService.listPoste().subscribe((data)=>{
      this.postes = data;
      console.log(this.postes);
    })
    this.employeService.listEmploye().subscribe(
      (data)=> {this.employes = data;
      console.log(this.employes);
    })
  }
  deletemp(id:number){
    this.employeService.deleteEmploye(id).subscribe((data)=>{
      console.log(data);
  this.employeService.listEmploye().subscribe((data)=>
    {
      this.employes=data;
      console.log(this.employes);

    });
  });}


  rechercherEmp(){
    this.employeService.rechercherParCin(this.cin).
    subscribe(data => {
    this.employes = data;
    console.log(data)
  });
    }
}
