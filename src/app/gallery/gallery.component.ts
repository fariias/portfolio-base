import { Component, OnInit } from '@angular/core';
import { UnhideApiService } from '../unhide-api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  projects: any;

  constructor(private unhideapi: UnhideApiService) {}

  ngOnInit() {

    this.unhideapi.getProjects().subscribe(projects => {
      this.projects = projects.dict.user.sketchbookitems
    })

  }

}
