import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {TaskComponent} from "../../../pages/task/task.component";
import {User} from "../../models/user.model";

export interface TableColumn {
  caption: string;
  field: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() set dataSource(data : Task[] | User[] | any) {
    if(data){
      console.log(data)
      this.setDataSource(data);
    }
  }

  @Output()
  clickOnItem = new EventEmitter<any>();

  public _dataSource = new MatTableDataSource([]);
  public displayedColumns: string[] = [];

  ngOnInit(): void {
    this.displayedColumns = this.columns.map((tableColumn: TableColumn) => tableColumn.caption);
  }


  setDataSource(data: any) {
    this._dataSource = new MatTableDataSource<never>(data);
  }

}
