import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  // service list 
  getservicedata(){
    return this.http.get<any>("http://localhost:3000/services");
  }
  // view service
  getviewdata(id:any){
    return this.http.get<any>("http://localhost:3000/view/"+id);
  }
  // edit service 
  editservice(id:any,service:any){
    return this.http.post<any>("http://localhost:3000/edit/"+id,{"Servicedata":service});
  }
}
