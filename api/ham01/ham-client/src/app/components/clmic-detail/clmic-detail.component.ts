import {Component, Inject, OnInit} from '@angular/core';
import { ClMic } from "../../models/cl-mic.model";

//need a way to get the url for certain quesiton
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-clmic-detail',
  templateUrl: './clmic-detail.component.html',
  styleUrls: ['./clmic-detail.component.css']
})
export class ClmicDetailComponent implements OnInit {

  clMic : ClMic;

  constructor(
    private route: ActivatedRoute,
    @Inject("data") private data
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
/*      this.data.getClmic(+params["id"])
              .then(clMic => this.clMic = clMic);*/
      this.clMic = this.data.getClmic(+params["id"]);
    });
  }

}
