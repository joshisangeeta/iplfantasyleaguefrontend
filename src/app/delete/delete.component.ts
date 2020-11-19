import { Component, OnInit } from '@angular/core';
import { Match } from '../matches';
import {DataService} from '../data.service'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  match:Match[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    
   
  }
 


  }

  