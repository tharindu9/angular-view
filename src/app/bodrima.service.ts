import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import  {Bording} from './models/bording'
import * as firebase from 'firebase';

 @Injectable(
   {
  providedIn: 'root'
 }
)
export class BodrimaService {

  private bordingList = this.db.list<Bording>('bording');

  constructor(private db: AngularFireDatabase) { 
  }

  get(){
    return this.bordingList;
  }
}
