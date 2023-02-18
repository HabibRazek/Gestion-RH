import { DepartementService } from './../service/departement.service';
import { Departement } from './../../model/Departement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  allDepartements! : Departement[];
  nomDep!: string;

  departements!: Departement[];
  constructor(private departementService : DepartementService) { }

  ngOnInit(): void {
    this.departementService.listDepartement().subscribe((data)=> {
      this.departements = data;
      console.log(this.departements);
    })

    this.departementService.listDepartement().subscribe(data => {
      console.log(data);
      this.allDepartements = data;
      });
  }
  deletedep(id:number){
    this.departementService.deleteDepartement(id).subscribe((data)=>{
      console.log(data);
      this.departementService.listDepartement().subscribe((data)=>{
        this.departements = data;
        console.log(this.departements);
    });
  });}

  onKeyUp(filterText : string){
    this.departements = this.allDepartements.filter(item =>
    item.nomDep.toLowerCase().includes(filterText));
    }

}
