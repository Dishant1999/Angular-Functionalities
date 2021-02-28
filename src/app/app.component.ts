import { Component } from '@angular/core';
import * as _ from 'lodash'; 
import {selectInput} from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //input is provided in the nested object array format
  input = [{id: 'a'},
  {id:'b', values:[{id:1},{id:2}]},
  {id:'c', values:[{id:1},{id:2}]}
  ];

  //every value in the input is inititalized with 2 properties: disabled, checked
  private initializeInput(checkBoxValueList) {
    checkBoxValueList.map((obj) => {
      obj['checked'] = false;
      obj['disabled'] = false;
      if (obj['values'])
        this.initializeInput(obj['values']);
      return obj;
    });
  }

  isSubmitted : boolean =false;
  selectAllBoxes : boolean = false;
  checkBoxValueList = this.input;

  ngOnInit(){
    this.initializeInput(this.checkBoxValueList);
  }

  setSelected(index){
    index['checked'] = !index['checked']
    if(index['values']){
      this.selectAllSubValues(index);
    }
    this.checkAllSelected(this.checkBoxValueList);
  }

  private selectAllSubValues (object){
    if(object['checked']){
      _.each(object.values,function(item){
        item.checked = true;
      })
    }else{
      _.each(object.values,function(item){
        item.checked = false;
      })
    }
  }

  private checkAllSelected(object) {
    this.selectAllBoxes = object.every(function (e) {
      return e['checked'] == true;
    });
  }

  selectAll(event){
    if(event.target.checked){
      this.selectAllBoxes = true;
      this.checkBoxValueList.forEach((item)=>{
        item['checked'] = true;
        if(item['values']){
          this.selectAllSubValues(item);
        }
      })
    }else{
      this.selectAllBoxes = false;
      this.checkBoxValueList.forEach((item)=>{
        item['checked'] = false;
        if(item['values']){
          this.selectAllSubValues(item);
        }
      })
    }
  };

  setSelectedDeep(parent, object){
    object.checked = !object.checked;
    if(parent.checked){
      parent.checked = false;
      this.selectAllBoxes = false;
    }
    else
      parent.checked = parent['values'].every(function (e) {
        return e['checked'] == true;
      });
  }

  onSubmit(){
    this.isSubmitted = !this.isSubmitted;
  }
}
