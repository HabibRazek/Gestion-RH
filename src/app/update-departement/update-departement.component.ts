import { Router, ActivatedRoute } from '@angular/router';
import { DepartementService } from './../service/departement.service';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/model/Departement.model';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {

  currentDepartement = new Departement();
  constructor(private departementService: DepartementService,
    private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.departementService.getDepartementById(this.activatedRoute.snapshot.params['id']).
    subscribe(data =>{this.currentDepartement = data;});
  }
  updateDepartement(){
    this.departementService.updateDepartement(this.currentDepartement).subscribe(data => {
      this.router.navigate(['departements']);
  });

}
}
