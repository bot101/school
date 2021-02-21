import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-segmented-control',
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.scss']
})
export class SegmentedControlComponent implements OnInit {

  @Input() buttons: {text: string}[];
  selectedIndex = 0;
  @Output() buttonSelected: EventEmitter<{text: string}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSegmentClick(button, index) {
    this.selectedIndex = index;
    this.buttonSelected.emit(button);
  }

}
