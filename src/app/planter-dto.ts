export class PlanterDto {
    planterId:number;
	planterHeight:number;
	planterCapacity:number;
	drinageHoles:number;
	planterShape:string;
	planterStock:number;
	planterCost:number;
	plantName:string;

     constructor(
        planterId:number,
	planterHeight:number,
	planterCapacity:number,
	drinageHoles:number,
	planterShape:string,
	planterStock:number,
	planterCost:number,
	plantName:string

     )

     {
        this.planterId=planterId;
        this.planterHeight=planterHeight;
        this.planterCapacity=planterCapacity;
        this.drinageHoles=drinageHoles;
        this.planterShape=planterShape;
        this.planterStock=planterStock;
        this.planterCost=planterCost;
        this.plantName=plantName;
     }
}
