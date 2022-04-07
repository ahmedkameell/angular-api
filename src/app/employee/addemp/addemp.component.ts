import { ApifunctionsService } from './../../shared/apifunctions.service';
import { employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  object = new employee;
  constructor( private  serv : ApifunctionsService , private router : Router ) { }

  ngOnInit(): void {
  }
  save(){
    this.serv.post(this.object).subscribe(data =>{
      this.router.navigateByUrl('listemp')
    })
  }

}
