import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export class DepartmentdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params =>
      console.log("wwewe",params)
    )
  }

}
