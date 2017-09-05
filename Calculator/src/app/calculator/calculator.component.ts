import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  Calculator:any;
  CurrentValue:number;
  previousValue:number = null;
  computeMethod : string;
  constructor() { }

  ngOnInit() {
  }
  Clear(){
    this.Calculator="";
    this.CurrentValue = 0;
    this.previousValue = 0;
  }

  OnCompute(){
    switch(this.computeMethod){
      case 'Division': 
                 this.Calculator = this.previousValue / this.CurrentValue;
                 break;
      case  'Addition':
              this.Calculator = this.previousValue + this.CurrentValue;
              break;

      case 'Subtraction':
            this.Calculator = this.previousValue - this.CurrentValue;
            break;
      case 'Multiplication':
            this.Calculator = this.previousValue * this.CurrentValue;
            break;

      default:
         this.Calculator = 0;
         break;
        
    }
  }

  onChangeValue(param:number){
    this.Calculator= this.previousValue = this.Calculator ||this.CurrentValue;
   this.Calculator =  this.CurrentValue = param;
  }

  Compute(Operation:string){
    this.computeMethod = Operation;
  }



}
