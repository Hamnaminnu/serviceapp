import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-editservice',
  templateUrl: './editservice.component.html',
  styleUrls: ['./editservice.component.css']
})
export class EditserviceComponent implements OnInit {
// declarations
  images:any;
  servicedata={
    name:'',
    description:'',
    imagepath:''
  }
  url =""
  
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private TaskService : TaskService,private fb: FormBuilder) { }

  ngOnInit(): void {
    // serivce data
    this.activatedRoute.queryParams
    .subscribe(params => {
     var id = params["_id"];
      console.log(id);
      this.TaskService.getviewdata(id)
      .subscribe(data => {
      this.servicedata = data;
      console.log(this.servicedata);
    });
   });
  }
  edit(){
    this.activatedRoute.queryParams
    .subscribe(params => {
      var id = params["_id"];
      // const fd = new FormData();
      // fd.append("file",this.images);
      this.TaskService.editservice(id,this.servicedata)
      .subscribe()  
      alert("done");
      this.router.navigate(['view'],{ queryParams: {_id:id}});
  })
  }
  // selectImage(event:any) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.images = file;
  //   }
  // }


  selectfile(event:any){
      // image file convert to url 
    if (event.target.files.length > 0){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
      this.url=event.target.result
      this.servicedata.imagepath=this.url;
      console.log("here");
      console.log(this.servicedata.imagepath)
      console.log(this.url)
      }
    }
  }
}
