import { DatePipe } from "@angular/common"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
})
export class LocaleDateService {

    constructor (private datePipe: DatePipe) {

    }

    transformDateToHoursMinutes (date: Date) {
        return this.datePipe.transform(date, 'HH:mm')
    }

}