import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;
  @Output() btnClick: any;

  constructor() { 
    this.text = "Click";
    this.color = "#000"
    this.btnClick = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick():void{
    this.btnClick.emit(); 
    // console.log("button named: " + this.text + " clicked!")
  }

}
