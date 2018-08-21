import { DataService } from '../../services/data.service';
import { Component, OnInit, OnDestroy} from '@angular/core';
import { ClMic } from "../../models/cl-mic.model";

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cl-mic',
  templateUrl: './cl-mic.component.html',
  styleUrls: ['./cl-mic.component.css']
})
export class ClMicComponent implements OnInit {

/*  clMics:ClMic[];

  constructor(@Inject("data") private data) { }*/

  clMics: ClMic[];
  subscriptionClMics: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getClMics();
  }

  ngOnDestroy(){
    this.subscriptionClMics.unsubscribe();
  }



/*  getClMics(): void {
    this.clMics = this.data.getClmics();
  }*/


  getClMics(): void{
    this.subscriptionClMics = this.dataService.getClmics()
      .subscribe(clMics => this.clMics = clMics);
  }
}
