import { DepartementService } from './../service/departement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from 'src/model/Departement.model';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  newDepartement = new Departement()
  departements!: Departement[];
  constructor(private departementService: DepartementService,private router:Router) { }

  ngOnInit(): void {
  }
  addDepartement(){
    this.departementService.addDepartement(this.newDepartement).subscribe
    (data => {console.log(data);
    this.router.navigate(['departements']);
  });
  }}


