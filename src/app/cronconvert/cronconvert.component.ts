import { Component, OnInit } from '@angular/core';
import * as CronToQuartz from 'cron-to-quartz';

@Component({
  selector: 'app-cronconvert',
  templateUrl: './cronconvert.component.html',
  styleUrls: ['./cronconvert.component.css']
})
export class CronconvertComponent {

  cron: string = '';
  quartz: string = '';

  constructor() {
    this.cron = '@hourly';
    this.quartz = '';
  }
  
  convertToQuartz() {
    let quartz = CronToQuartz.getQuartz(this.cron);
    if (Array.isArray(quartz) && Array.isArray(quartz[0])) {
      this.quartz = quartz[0].join(' ');
    }
  }

}
