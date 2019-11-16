import { Component, OnInit } from '@angular/core';
import { DataBase } from '../db';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  projects: any;

  constructor(private db: DataBase) {}

  ngOnInit() {

    this.projects = this.db.getProjects();
    
  }

}
  