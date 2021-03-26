import { Injectable } from '@angular/core';
import {Entry} from './entry';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private store:AngularFirestore) { }
  saveuser(user:Entry){
    console.log(user)
    this.store.collection("details").add({...user})
  }
  readuser(){
    return this.store.collection("details").snapshotChanges()
  }
  edituser(user:Entry){
    this.store.doc("details/"+user.id).update(user)

  }
  deleteuser(user:Entry){
    this.store.doc("details/"+user.id).delete()

  }
}
