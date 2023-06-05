import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() title:string=""
  @Input() data:any=[]
  @Output() SelectedData=new EventEmitter()
constructor(){

}
FilterCat(event:any){
this.SelectedData.emit(event)
}
}
