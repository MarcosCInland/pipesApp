import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, arg?: boolean) : string { //...args: any[]
        //return 'HOLA MUNDO';
        if (arg) {
            return value.toUpperCase();
        }
        return value.toLowerCase();
    }
}