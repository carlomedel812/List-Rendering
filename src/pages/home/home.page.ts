import { Component } from '@angular/core';
import { IPersonData } from 'src/app/core/interfaces/IPersonData';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  persons: IPersonData[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.dataService.getList().then((data) => {
      this.persons = data;
    });
  }
}
