import { Component, OnInit, Inject} from '@angular/core';
import { ClMic } from "../../models/cl-mic.model";


@Component({
  selector: 'app-cl-mic',
  templateUrl: './cl-mic.component.html',
  styleUrls: ['./cl-mic.component.css']
})
export class ClMicComponent implements OnInit {

  clMics:ClMic[];

  constructor(@Inject("data") private data) { }

  ngOnInit() {
    this.getClMics();
  }

  getClMics(): void {
    this.clMics = this.data.getClmics();
  }
}
