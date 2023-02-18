import { PosteService } from './../service/poste.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/model/Employe.model';
import { Poste } from 'src/model/Poste.model';
import { EmployeService } from '../service/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  currentEmploye = new Employe();
  updatedPosId!: number;
  postes!: Poste[]

  constructor(private employeService:EmployeService,
    private router:Router,
    private activatedRoute : ActivatedRoute,
    private posteService : PosteService) { }

  ngOnInit(): void {
    this.employeService.listPoste().subscribe(data => 
      {this.postes = data;
    console.log(data);
  });
    this.employeService.getEmployeById(this.activatedRoute.snapshot.params['id']).
    subscribe(data =>{this.currentEmploye = data;
    this.updatedPosId = this.currentEmploye.poste.idPos;});
  
}
updateEmploye(){
  this.currentEmploye.poste = this.postes.find
  (cat => cat.idPos == this.updatedPosId)!;
  this.employeService.updateEmploye(this.currentEmploye).subscribe(data => {

    this.router.navigate(['employes']);
});

}


}
