import { Component, Input, OnInit } from '@angular/core';
import { IPersonData } from 'src/app/core/interfaces/IPersonData';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() person!: IPersonData;

  constructor() { }

  ngOnInit() {}

}
