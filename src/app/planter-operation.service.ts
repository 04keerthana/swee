import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planter } from './planter';
import { PlanterDto } from './planter-dto';


@Injectable({
  providedIn: 'root'
})
export class PlanterOperationService {

  baseURL = 'http://localhost:6001/planter';
  
  allPlanterEndpoint = this.baseURL+'/planters';
  endpoint = this.baseURL+'/add';
  // orderByCategoryEndpoint=this.baseURL+'';
  

  planterArr:Planter[] = [];
  constructor(private http:HttpClient) {

    console.log("Inside Constructor "+this.allPlanterEndpoint);
   }
   getAllPlantersFromSpring():Observable<PlanterDto[]>
  {
    console.log("inside service : "+this.allPlanterEndpoint);
      return this.http.get<PlanterDto[]>(`${this.allPlanterEndpoint}`);
  }

  addPlanter(planter:Planter):Observable<Object>
  {
    console.log('Planter Service - add Planter called');
    return this.http.post<Planter>(`${this.endpoint}`,planter);
    
  }



  addPlanter1(planterFromUser:Planter)
  {
    
    this.planterArr.push(planterFromUser); 
    console.log("Inside Planter Service : Planter Added "+planterFromUser.planterId);
    console.log(" Total Planters Are :- "+this.planterArr.length);
    
  }
  getPlanterByNumber(searchPlanterId:number):Planter
  {
    let outputPlanter:Planter = new Planter(0,'',0,'','','','','',0,0,0);
    for(let i=0;i<this.planterArr.length;i++)
    {
      let thisPlanter:Planter = this.planterArr[i];
        if(thisPlanter.planterId == searchPlanterId)
        {
          outputPlanter = thisPlanter;
          break;
        }
    }
    
    return outputPlanter;
  }

  getPlanterArr():Planter[]
  {
    return this.planterArr;
  }

  getPlantersByCategory(filterCategory:string):Planter[]
  {
    // localhost:8080/api/planter/{category}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.category == filterCategory)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantersByStarRating(filterStarRating:number):Planter[]
  {
    // localhost:8080/api/planter/{rating}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.starRating == filterStarRating)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }
  getPlantersByTypesOfPlanters(filterTypesOfPlanters:string):Planter[]
  {
    let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.typesOfPlanters == filterTypesOfPlanters)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }

  getPlantersByBloomSeason(filterBloomSeason:string):Planter[]
  {
    console.log("bloomSeason inside service "+ filterBloomSeason);
    // localhost:8080/api/planter/{bloom}
   let outputArr:Planter[] = [];

    this.planterArr.forEach(p=>{
      if(p.bloomSeason == filterBloomSeason)
      {
        outputArr.push(p);
      }
    });

    return outputArr;
  }

  
}
