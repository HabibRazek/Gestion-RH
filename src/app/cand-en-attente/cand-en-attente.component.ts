import { Router } from '@angular/router';
import { CandidatService } from './../service/candidat.service';
import { Component, OnInit } from '@angular/core';
import { Candidat } from 'src/model/Candidat.model';

@Component({
  selector: 'app-cand-en-attente',
  templateUrl: './cand-en-attente.component.html',
  styleUrls: ['./cand-en-attente.component.css']
})
export class CandEnAttenteComponent implements OnInit {

  candidats!: Candidat[];
  newCandidat = new Candidat;
  constructor(private candidatService : CandidatService,
    private router : Router) { }

  ngOnInit(): void {
    this.candidatService.listCandidat().subscribe(
      (data) => { this.candidats = data;
        console.log(this.candidats);
  })
  }
  deletcan(id:number){
    this.candidatService.deleteCandidat(id).subscribe((data)=>{
      console.log(data);
  this.candidatService.listCandidat().subscribe((data)=>
    {
      this.candidats=data;
      console.log(this.candidats);
 
    });
  });}
/*   addCandidat(){
    this.candidatService.addCandidat(this.newCandidat).
    subscribe(data => {console.log(data);
    this.router.navigate(['candValid']);
  });
  } */
/*   addCandValid(id : number){
    this.candidatService.getCandidatById(id).
    subscribe(data => {    this.candidatService.updateCandidat(data).subscribe
      (data => {data.etat="done", console.log(data);
  });
 } )
  } */
  setEtat(can :Candidat){
    can.etat="valide";
}
  modif(id : number){
    this.candidatService.getCandidatById(id).subscribe(data =>  {this.setEtat(data),
      this.candidatService.updateCandidat(data).subscribe
      (data => {console.log(data); 
        window.location.reload();

  });
    } )

  }};

   

  


