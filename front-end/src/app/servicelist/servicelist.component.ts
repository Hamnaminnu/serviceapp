import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './servicelist.component.html',
  styleUrls: ['./servicelist.component.css']
})
export class ServicelistComponent implements OnInit {
  // declaration 
  servicedatas:any

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private TaskService : TaskService) { }

  ngOnInit(): void {
    // service data 
    this.TaskService.getservicedata().subscribe((data)=>{
      this.servicedatas=JSON.parse(JSON.stringify(data));
    })
  }
  viewservice(servicedata:any){
    // redirect to view page 
    const id =servicedata._id;
    this.router.navigate(['view'], { queryParams: {_id:id}});
  }
}
