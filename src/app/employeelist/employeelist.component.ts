import { Component, OnInit } from '@angular/core';
import { empData } from '../employeeData';
import { EmployeeList } from '../emp-List-Data';

@Component({
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  emplist: empData[] = EmployeeList;
  empModel: empData;
  showNew: Boolean = false;
  selectedRow: number;

  constructor() {   
  }

  ngOnInit() {
    console.log(  this.emplist.length);
  }
  onDelete(index: number) {
    if (confirm("Are you sure you want to delete?")) {
      this.emplist.splice(index, 1);
    }
    else { return false }
  }
}
