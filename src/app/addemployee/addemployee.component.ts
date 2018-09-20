import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { empData } from '../employeeData';
import { EmployeeList } from '../emp-List-Data';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  pageTitle: string = 'Add';
  emplist: empData[] = EmployeeList;
  empModel: empData;
  id: number;
  submitType: string = 'Save';
  employeeForm: FormGroup;

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _router: Router) {
    console.log(this.id);
    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }
    this.employeeForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      qualification: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
       departmentId: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.empModel=new empData();
    if (this.id!=null && this.id >= 0) {
      this.pageTitle = 'Edit employee';
      this.submitType = 'Update';
      // Retrieve selected registration from list and assign to model.
      this.empModel = Object.assign({}, this.emplist[this.id]);
    }
    // else {
    //   this.submitType = 'Save';
    //   this.pageTitle = 'Add Employee';
    // }
  }
  onSave() {
    if (this.id != null && this.id >= 0) {

      this.emplist[this.id].name = this.empModel.name;
      this.emplist[this.id].surname = this.empModel.surname;
      this.emplist[this.id].address = this.empModel.address;
      this.emplist[this.id].contactNumber = this.empModel.contactNumber;
      this.emplist[this.id].qualification = this.empModel.qualification;
      this.emplist[this.id].department = this.empModel.department;
      this._router.navigate(['/']);
    }
    else {
  this.empModel.id=this.emplist.length;
      this.emplist.push(this.empModel);
    }

  }
  get name() { return this.employeeForm.get('name'); }
  get surname() { return this.employeeForm.get('surname'); }
  get address() { return this.employeeForm.get('address'); }
  get qualification() { return this.employeeForm.get('qualification'); }
  get contactNumber() { return this.employeeForm.get('contactNumber'); }
  get departmentId() { return this.employeeForm.get('departmentId'); }
}
