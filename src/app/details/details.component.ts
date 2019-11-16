import { Component, OnInit } from '@angular/core';
import { DataBase } from '../db';
import { Router, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [

    trigger('slideIn', [
      state('in', style({transform: 'translateX(0)'})),

      transition('void => *', [
        style({transform: 'translateX(-60px)', opacity: '0'}),
        animate('800ms ease-out')
      ])
    ]),

    trigger('slideInRight', [
      state('true', style({transform: 'translateX(0)', opacity: 1})),

      transition('void => *', [
        style({transform: 'translateX(150px)', opacity: '0'}),
        animate('300ms 500ms ease-out')
      ])
    ]),

    trigger('slider', [
      state('true', style({transform: 'scaleY(0)'})),

      transition('void => *', [
        style({transform: 'scaleY(1)'}),
        animate('300ms 900ms ease-in')
      ])
    ])

  ]
})
export class DetailsComponent implements OnInit {
  project: any;
  state: string = 'out';
  state2: string = 'true';

  constructor(private db: DataBase, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let project_id = params['id'];

      this.project = this.db.getProjectById(project_id); 
    
    })
  }

}
