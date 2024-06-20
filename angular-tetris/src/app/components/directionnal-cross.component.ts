import { Component } from "@angular/core";

@Component({
    selector: 'directionnal-cross',
    standalone: true,
    styles: `
        .directionnal-cross {
            width: 50px;
        }
        em {
            display: block;
            height: 0;
            width: 0;
            border: 6px solid;
            border-color: transparent transparent #111;
        }

        em.right {
            transform: rotate(90deg);
        }
        em.left {
            transform: rotate(-90deg);
        }
        em.down {
            transform: rotate(180deg);
        }
    `,
    template: `
        <div class="directionnal-cross flex flex-col justify-center gap-1">
            
            <em class="up self-center"></em>

            <div class="flex justify-between">
                <em class="left"></em>
                <em class="right"></em>
            </div>

            <em class="down self-center"></em>

        </div>
    `
})

export class DirectionnalCrossComponent {}