import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name: 'tostring',
})
export class ToStringPipe implements PipeTransform {

    public transform(s: number|string): string {
        return `${s}`
    }

}
