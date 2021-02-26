import { Component } from '@angular/core';
import * as _ from 'lodash'; 
import {selectInput} from './app.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  input = [{id: 'a'},
  {id:'b', values:[{id:1},{id:2}]},
  {id:'c', values:[{id:1},{id:2}]}
  ];
  isSubmitted : boolean =false;
  selectAllBoxes : boolean = false;
  checkBoxValueList = this.input;
  ngOnInit(){
      this.initializeInput(this.checkBoxValueList);

    console.log(this.checkBoxValueList);
  }

  
  private initializeInput(checkBoxValueList) {
    checkBoxValueList.map((obj) => {
      obj['checked'] = false;
      obj['disabled'] = false;
      if (obj['values'])
        this.initializeInput(obj['values']);
      return obj;
    });

  }

  selectAll(event){
    if(event.target.checked){
      _.each(this.checkBoxValueList,function(item){
        item.checked = true;
      })
    }else{
      _.each(this.checkBoxValueList,function(item){
        item.checked = false;
      })
    }
  };

  setSelected(id){
    for(let index of this.checkBoxValueList){
      if(index.id == id)
          index['checked'] = !index['checked']
    }
    this.selectAllBoxes = this.checkBoxValueList.every(function(e){
      return e['checked'] == true;
    })
  }

  // setSelectedDeep(id){
  //   for(let index of this.checkBoxValueList){
  //     if(index.list)
  //       for(let item of index.list)
  //         if(item.id == id)
  //           item.checked = !index.checked
  //   }
  // }
  onSubmit(){
    this.isSubmitted = !this.isSubmitted;
  }

  // downClick(event){
  //   console.log('downClick');
  //   event.visible = !event.visible    
  // }

}
