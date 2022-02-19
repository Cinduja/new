import { Component } from '@angular/core';
interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'texteditor';
  selectedValue: string='';
  selectedCar: string='';
  toggle = true;
  status='UnBold';
  bold_class='text_type_bold';
  toggle_italics=true;
  toggle_status='Italics';
  toggle_underline=true;
  underline_status='Underlined';
  isbold=true;
  isitalics=false;

  bold() {
    this.toggle = !(this.toggle);
    console.log(this.toggle)
    debugger;
    this.status = this.toggle ? 'UnBold' : 'Bold';
    console.log(this.status)
    if(this.toggle==true)
    { this.isbold=true;}
    else
    { this.isbold=false;}
   
    
}
italics(){
  this.toggle_italics = !this.toggle_italics;
  this.toggle_status = this.toggle_italics?'Italics':'Normal';
  this.isitalics=false;
}
underlined(){
  this.toggle_underline = !this.toggle_underline;
  this.underline_status = this.toggle_underline?'Underlined':'Remove Underline';
}
}