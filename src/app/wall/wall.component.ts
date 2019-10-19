import { Component, OnInit } from '@angular/core';
import {BodrimaService} from '../bodrima.service';
import {Bording} from '../models/bording';
import { ReversePipe } from 'ngx-pipes';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  bording : any[];

  constructor(private bordingService : BodrimaService,public dialog: MatDialog) { }

  ngOnInit() {
    this.get();
  }

  get(){
    this.bording = [];
    this.bordingService.get().snapshotChanges().subscribe(item => {
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;
        console.log(y)
        this.bording.push(y);
      })
    })
  }

}
