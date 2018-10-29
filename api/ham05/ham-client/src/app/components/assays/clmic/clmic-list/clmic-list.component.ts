import { Component, OnInit, Inject} from '@angular/core';
import {ClmicMeta} from "../../../../models/clmic-meta.model";

@Component({
  selector: 'app-clmic-list',
  templateUrl: './clmic-list.component.html',
  styleUrls: ['./clmic-list.component.css']
})
export class ClmicListComponent implements OnInit {
  clmics: ClmicMeta[];

  constructor(@Inject("ClmicDataService") private ClmicDataService) { }

  ngOnInit() {
    this.getClmics();
  }

  private getClmics(): void {
    this.clmics = this.ClmicDataService.getClmics();
  }

}
