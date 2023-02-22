import { Component } from '@angular/core';
import { PlanterDto } from '../planter-dto';
import { PlanterOperationService } from '../planter-operation.service';

@Component({
  selector: 'app-planter-list',
  templateUrl: './planter-list.component.html',
  styleUrls: ['./planter-list.component.css']
})
export class PlanterListComponent {
  allPlanters:PlanterDto [] = [];
  constructor(private planterService:PlanterOperationService)
  {
   this.planterService.getAllPlantersFromSpring().subscribe(
      data=>{
          this.allPlanters = data;
      },
      err=>{
        console.log("Error "+err);
        
      }
    );
  }

}
