import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {

    transform( value : string, enMayu: boolean = false) : string {

      return (enMayu) ? value.toUpperCase() : value.toLowerCase()

    }

}