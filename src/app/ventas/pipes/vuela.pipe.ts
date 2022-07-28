import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(value: boolean) : string { //...args: any[]
        //return 'HOLA MUNDO';
        return value? 'vuela': 'no vuela' 
    }
}