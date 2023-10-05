import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label:string = ''
  @Input() color:ThemePalette | 'success' = 'primary'
  @Input() routerLink:string | null = null
  @Input() icon:boolean = false;

  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
