import { Component } from '@angular/core';
import * as _ from 'lodash'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'select';
  isSubmitted : boolean =false;
  // UserInput = [1,2,3,4,5];
  // checkBoxValueList = Array<{id: number, checked: boolean}>();
  expanded = false;
  ngOnInit(){
    // _.each(this.checkBoxValueList,function))
  }
  checkBoxValueList = [
    {
      id:1,
      checked:false,
      isDisabled: false
    },
    {
      id:2,
      checked:false,
      isDisabled: false,
      visible:false,
      list:[
        {
          id:0.1,
          checked:false,
          isDisabled: false
        },
        {
          id:0.2,
          checked:false,
          isDisabled: false
        },
        {
          id:0.3,
          checked:false,
          isDisabled: false
        }
      ]
    },
    {
      id:3,
      checked:false,
      isDisabled: true
    },
    {
      id:4,
      checked:false,
      isDisabled: false
    },
    {
      id:5,
      checked:false,
      isDisabled: false
    }
  ]

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
          index.checked = !index.checked
    }
    console.log(this.checkBoxValueList);
  }

  setSelectedDeep(id){
    for(let index of this.checkBoxValueList){
      if(index.list)
        for(let item of index.list)
          if(item.id == id)
            item.checked = !index.checked
    }
  }
  onSubmit(){
    this.isSubmitted = !this.isSubmitted;
  }

  downClick(event){
    console.log('downClick');
    event.visible = !event.visible
    
  }

  showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }
}
