import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quartznotation',
  templateUrl: './quartznotation.component.html',
  styleUrls: ['./quartznotation.component.css']
})
export class QuartznotationComponent {

  @Input()
  quartzNotation: string = '';
  
}
