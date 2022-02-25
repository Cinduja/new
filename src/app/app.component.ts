
import { Component, ElementRef, Renderer2, ViewChild, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('editor') el:ElementRef;
  text: any;

  constructor(private element:ElementRef,private renderer:Renderer2)
  {
    
  }

  // ngOnInit() {
  //   this.getSelectionText();
  // }
  //  getSelectionText() {
  //   var text = "";
  //   var selection=document.getSelection();
  //   if (window.getSelection.toString()!="") {
  //     debugger;
  //       text = window.getSelection.toString();
  //   } else if(selection &&selection.type!= "Control") {
  //      var textRange= document.createRange();
  //      alert(textRange.toString())
  //      return textRange.toString();
  //   }
  //   return text;
// }

    
  
   formatDoc(sCmd:any, sValue:any) {
     debugger;
     if(window.getSelection().toString()!='')
     {
       this.text=window.getSelection().toString();
// const domparser=new DOMParser();
// var div = document.createElement('div');
// div.innerHTML=this.text.trim();
// change this to div.childNodes to support multiple top-level nodes.
// this.text=div.firstChild;
   }
   else
   {
     this.text=this.el.nativeElement;
   }  
   this.renderer.setStyle(this.el.nativeElement,sCmd,sValue);
     
  }
}


