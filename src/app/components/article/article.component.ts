import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'note-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {
  @Input() article;
  @Output() deleteArt: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  trunc(string: string): string{
    let correctText = string.slice(0, this.article.view * 250);
    if(correctText.length === this.article.text.length){
      this.article.hide = true;
    }
    
    return correctText;
  }

  readMore(): void{
    this.article.view = this.article.view + 1;
    this.trunc(this.article.text);
  }

  hideText(): void{
    this.article.view = 0;
    this.article.hide = !this.article.hide;
  }

  show(): void{
    this.article.showImage = true;
  }

  hideImage(): void{
    this.article.showImage = false;
  }

  deleteArticle(targetId: number):void{
    this.deleteArt.emit(targetId);
  }
}
