import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'gameboard-grid',
    template: `
        <div 
            id="gameboard-grid" 
            class="border-2 border-black m-4 p-0.5"
        >

            <div class="gameboard-grid__inner flex flex-col gap-0.5">

                <div 
                    *ngFor="let row of grid;" 
                    name="gameboard-row" 
                    class="flex gap-1"
                >

                    <div *ngFor="let cell of row;">
                        <gameboard-cell [isActive]="cell === 1"></gameboard-cell>
                    </div>
                    
                </div>
        
            </div>

        </div>
    `
})


export class GameboardGridComponent implements OnInit {

    nrows = 21
    ncolumns = 10

    rows: number[]|undefined

    grid: number[][]|undefined

    
    ngOnInit() {

        this.rows = Array(this.nrows).fill([])

        this.grid = this.rows.map(_ => Array(this.ncolumns).fill(0))

    }


}