import {NgModule} from "@angular/core";
import {TableComponent} from "./table.component";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [CommonModule, MatTableModule],
  providers: [],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
