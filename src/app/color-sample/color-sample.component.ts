import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.css']
})
export class ColorSampleComponent implements OnInit {

  @Input() color;

  constructor() { }

  ngOnInit() {
  }

}
