import { Component, OnInit } from '@angular/core';
import {Entry} from './entry';
import {EntryService} from './entry.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private obj:EntryService,private router:Router) { }
  userlist:Entry[]=[]

  ngOnInit(): void {
    this.obj.readuser().subscribe(data=>{
      this.userlist= data.map((doc)=>{
        return{
          id:doc.payload.doc.id,
          ...doc.payload.doc.data() as{}
        }as Entry
      })
    })
  }
  model=new Entry("","","","")
  save(){
    // console.log(this.model)
    if(this.model.id==null){
      this.obj.saveuser(this.model)
    }else{
      this.obj.edituser(this.model)
    }
  }
  edit(data:Entry){
    this.model=data
  }
  delete(data:Entry){
    this.obj.deleteuser(data)
  }
  back(){
    this.router.navigate(["/entry"])

  }

}
