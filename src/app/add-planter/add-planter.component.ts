import { Component, OnInit } from '@angular/core';
import { Planter } from '../planter';
import { PlanterOperationService } from '../planter-operation.service';

@Component({
  selector: 'app-add-planter',
  templateUrl: './add-planter.component.html',
  styleUrls: ['./add-planter.component.css']
})
export class AddPlanterComponent implements OnInit{
  planter:Planter = new Planter(0,'',0,'','','','','',0,0,0);

  constructor(private planterService:PlanterOperationService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.planter);
    this.doSaveTOServer();
  }

  doSaveTOServer()
  {
    this.planterService.addPlanter(this.planter).subscribe(
      data=>{
          console.log(" Data Saved !!! "+data);
      },
      error => {
        console.log(error);
        
      }
     );
  }

}
