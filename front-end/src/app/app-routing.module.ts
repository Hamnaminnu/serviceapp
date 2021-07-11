import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditserviceComponent } from './editservice/editservice.component';
import { ServicedashComponent } from './servicedash/servicedash.component';
import { ServicelistComponent } from './servicelist/servicelist.component';
import { ViewserviceComponent } from './viewservice/viewservice.component';

const routes: Routes = 
[{path:'', component: ServicedashComponent,
          children:[{path:'', component: ServicelistComponent}, 
            {path:"view", component: ViewserviceComponent},
            {path:"edit", component: EditserviceComponent}]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
