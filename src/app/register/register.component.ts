import { Component, OnInit } from '@angular/core';
import {EntryService} from '../entry/entry.service';
import {Entry} from '../entry/entry';
import {Router} from '@angular/router';
import {Register} from '../register'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private obj:EntryService) { }
  user:any
  pass:any
  returnurl:string=""
  loginsuccess:string=""
  userlist:Entry[]=[]

  ngOnInit(): void {
    this.returnurl="../welcome"
    this.obj.readuser().subscribe(data=>{
      this.userlist= data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as{}
        }as Entry
      })
    })

  
  }
  model=new Register("","")
  save(){
    this.user=this.model.username
    this.pass=this.model.password
    for(let i of this.userlist){
    if(this.user==i.username && this.pass==i.password){
      this.loginsuccess="true"
      localStorage.setItem("isLoggedin","true")
      localStorage.setItem("username",this.model.name)
      this.router.navigate([this.returnurl])
    }
  //   else{
  //    this.loginsuccess="false"
  //  }
   }
    if(this.loginsuccess=="false"){
      alert("login failed")
    }
   }
   back(){
     this.router.navigate(["/entry/entry"])
   }


  }
