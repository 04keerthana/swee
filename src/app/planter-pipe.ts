import { Pipe, PipeTransform } from '@angular/core'; 
 
@Pipe({
  name: 'myPlanter'
})
export class PlanterPipe implements PipeTransform{
    transform(value: any) {
        let about:string=value+'';
        let formattedabout:string='';
        formattedabout=about.slice(0,10)+'...'
        console.log('pipe method '+formattedabout);
        return formattedabout;
       
    }
}
