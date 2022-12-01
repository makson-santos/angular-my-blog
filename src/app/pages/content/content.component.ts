import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoContent:string = '';
  titleContent:string = '';
  desciptionContent:string = '';
  private id:string | null = "0";
  constructor(
    private rout:ActivatedRoute
  )
  {}
  ngOnInit(): void {
   this.rout.paramMap.subscribe(value =>
    this.id = value.get('id')
   )
   this.setValuesToComponent(this.id) 
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
    this.titleContent = result.title
    this.photoContent = result.photo
    this.desciptionContent = result.description
    this.titleContent = result.title
    
  }

}
