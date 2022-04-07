import { ApifunctionsService } from './../../shared/apifunctions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {
allData:[];
  constructor( private serv:ApifunctionsService ) {
    this.serv.get().subscribe((data:any)=>{
     this.allData= data;

    })
   }

   remove(id){
    this.serv.delete(id).subscribe(data =>{
      window.location.reload();
    })
   }

  ngOnInit(): void {
  }

}
