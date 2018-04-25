import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ColorSampleComponent} from './color-sample/color-sample.component';
import {MatIcon} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  primaryColor = '#1976d2';


  @ViewChild(MatIcon)
  primaryColorSample: any;

  ngOnInit() {

    console.log("primaryColorSample on ngOnInit():", this.primaryColorSample);

  }

  ngAfterViewInit() {

    console.log("primaryColorSample on ngAfterViewInit():", this.primaryColorSample);

  }


}
