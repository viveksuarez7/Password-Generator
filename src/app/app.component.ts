import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  includeNumbers = false;
  includeLetters = false;
  includeSymbols=false;
  password='';
  onChangeLength(value:string){
    const parseVal = parseInt(value);
    if(!isNaN(parseVal)){
      this.length=parseVal;
    }
  }
  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }
 onButtonClick(){
   const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   const numbers='1234567890'
   const symbols='!@#$%^&*()'

   

   let validChairs = '';
   if(this.includeLetters){
     validChairs += letters;
   }
   if(this.includeNumbers){
     validChairs += numbers; 
   }
   if(this.includeSymbols){
     validChairs += symbols;
   }
   let generatedPassword = '';
   for(let i=0;i<this.length;i++){
     const index = Math.floor(Math.random()*validChairs.length);
     generatedPassword += validChairs[index];
   }
   this.password=generatedPassword;
 }
}
