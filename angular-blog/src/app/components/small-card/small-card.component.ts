import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','small-card.componentcopy.css']
})
export class SmallCardComponent implements OnInit{
@Input()
photoCover: string=""
@Input()
cardTitle:string=""
  construtor(){}
ngOnInit():void{

}
}
