import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private _router: ActivatedRoute
  ) { }

  ngOnInit() {
    this._router.params.map(a => {
      console.log(a);
    }).subscribe();
  }

}
