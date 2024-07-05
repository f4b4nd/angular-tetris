import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name: 'tostring',
    standalone: true,
})
export class ToStringPipe implements PipeTransform {

    public transform(s: number|string): string {
        return `${s}`
    }

}
