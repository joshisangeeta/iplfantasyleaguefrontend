import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
   admin:Admin=new Admin();
   adminLogin:Admin=new Admin();
   isAdmin=false;
   isValid=false;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  loginMethod(){
    this.dataService.adminLogin(this.admin).subscribe((flag)=>{
      this.isValid=flag;
    if(this.isValid==true){
      alert("Login Successfull")
      this.isAdmin=true;
      this.router.navigateByUrl("/adminhome")
  }
  else{
    alert("Login Failed Provide Valid Credentials")
  }
});
}
}
