import { Component, OnInit, Inject } from '@angular/core';
import { ClmicMeta } from "../../../../models/clmic-meta.model";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-clmic-detail',
  templateUrl: './clmic-detail.component.html',
  styleUrls: ['./clmic-detail.component.css']
})
export class ClmicDetailComponent implements OnInit {

  clmic: ClmicMeta;

  constructor(private route: ActivatedRoute, @Inject("ClmicDataService") private ClmicDataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clmic = this.ClmicDataService.getClmic(params["id"]);
    });
  }

}
