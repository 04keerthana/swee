import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';

@Component({
  selector: 'app-planter-details',
  templateUrl: './planter-details.component.html',
  styleUrls: ['./planter-details.component.css']
})
export class PlanterDetailsComponent {
  __planterService:PlanterOperationService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  p:Planter = new Planter(0,'',0,'','','','','',0,0,0);
    constructor(planterService:PlanterOperationService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__planterService = planterService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchPlanterId= this.activeRoute.snapshot.params['pid']; // extract value from prameter(URI)
    console.log(searchPlanterId);
    this.p = this.__planterService.getPlanterByNumber(parseInt(searchPlanterId)); // get data from service class
    console.log(this.p);
  }


}
