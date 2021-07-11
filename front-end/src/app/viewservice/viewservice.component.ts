import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-viewservice',
  templateUrl: './viewservice.component.html',
  styleUrls: ['./viewservice.component.css']
})
export class ViewserviceComponent implements OnInit {
  // declaration 
  servicedata:any;

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private TaskService : TaskService) { }

  ngOnInit(): void {
  // serice data 
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
      this.TaskService.getviewdata(id)
      .subscribe(data => {
      this.servicedata = data;
    });
   });
  }
  edit(){
  // redirect to edit page 
    this.activatedRoute.queryParams
    .subscribe(params => {
    var id = params["_id"];
    this.router.navigate(['edit'], { queryParams: {_id:id}});
    });
  }
}
