import { Component, OnInit, Input } from '@angular/core';
import { Sample, example } from '../models/Department';
import { of, Observable, throwError } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { ApiServiceService } from '../services/api-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SampleService } from '../service/sample.service';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  // @Input() child: string;
  @Input() question: Sample;
config:example;
values="";
value="";
powers=['1','rfj','gj'];
model=new Sample(1,'vdg','vdf','vfdd');
headers: string[];
constructor(private apiservice:ApiServiceService,private sampleservice:SampleService){

}
 
  ngOnInit() {
    this.showConfigResponse();
    this.deleteHero();
    const nums=of(1,2,3);
    const squareValues = map((val:number)=>
    val=val*val);
    const squaredNum=squareValues(nums);
    squaredNum.subscribe();
     
    const numbers:Observable<number>=of(1,2,3,4,5,6,7,8,9,10).pipe(filter( v => v % 2 === 0));
    numbers.subscribe(
      next => console.log('next:', next),
      err => console.log('error:', err),
      () => console.log('Completed'),
    );
  }
  getNotification(count){
    console.log(count)
  }
  onKey(event){
    // this.values =event.target.value;
    this.values += (event.target as HTMLInputElement).value + ' | ';

    console.log("values",this.values);

  }
 
  update(value: string) 
  { this.value = value; 
    console.log("dfd",this.value)
  }

  getdata(){
    this.apiservice.getData().subscribe(data=>this.config= {
      id:data.id,
        title:data.title,
        name:data.name
      });
  }
  showConfigResponse() {
    console.log("enterrrrrrrrr");
    this.apiservice.getConfigResponse().subscribe(resp => {
      
        console.log("resp",resp)
        // display its headers
        const keys = resp.headers.keys();
        console.log("keys",keys);
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);
          console.log("headers",this.headers);
  
        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }
  deleteHero(){
    console.log("iddd",this.model.id)
  this.sampleservice.deleteHero(this.model.id).subscribe();
  console.log("new  example",this.model );


  }
 

}
