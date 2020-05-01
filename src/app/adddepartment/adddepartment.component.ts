import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
  form: FormGroup;
  departmentId: number;
  departmentName:String;
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AdddepartmentComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
     console.log("id",data.id);
     this.departmentId = data.departmentId;
     this.departmentName= data.departmentName;

     console.log("id",data.departmentId);

  }
  ngOnInit() {
    this.form = this.fb.group({
      departmentId: [this.departmentId, []],
      departmentName: [this.departmentName, []]
    });
  }
  save() {
    console.log("fdffd",this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
