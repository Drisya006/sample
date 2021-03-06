import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  editForm: FormGroup;

  constructor(private formbuilder:FormBuilder) { }
  ngOnInit() {
    this.editForm = this.formbuilder.group({
       departmentId: ['',Validators.required],
       departmentName: ['', Validators.required],
       email: ['', Validators.required]

    });
  }
  save() {
    console.log(" value ", this.editForm.value)
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  
}
