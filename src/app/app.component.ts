import { Component, OnInit } from '@angular/core';
import { seed } from './../../seed';

@Component({
  selector: 'note-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  data;
  selectedArticle: Object;

  ngOnInit(){
    this.data = seed;
  }

  showDetails(targetId){
    this.selectedArticle = this.data.find(e => e.id === targetId);
    this.selectedArticle["view"] = 0;
    this.selectedArticle["hide"] = false;
    this.selectedArticle["showImage"] = false;
  }

  deleteTargetArticle(targetId){
    this.data = this.data.filter(e => Number(e.id) !== Number(targetId));
    this.selectedArticle = null;
  }
}
