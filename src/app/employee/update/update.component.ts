import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/app/models/employee';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id;
    object = new employee;
    constructor( private  serv : ApifunctionsService , private router : Router ,
       private activeRoute : ActivatedRoute ) {
       this.id = this.activeRoute.snapshot.paramMap.get('id')
       this.serv.getById(this.id).subscribe((data:any)=>{
         this.object = data;
       })
       }

    ngOnInit(): void {
    }
    update(){
      this.serv.put(this.object ,this.id).subscribe(data =>{
        this.router.navigateByUrl('listemp')
      })
    }
}
