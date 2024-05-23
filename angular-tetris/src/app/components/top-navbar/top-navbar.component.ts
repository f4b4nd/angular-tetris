import { Component } from '@angular/core'

@Component({
    selector: 'top-navbar',
    template: `
        <nav class="border-b border-black">

            <div class="flex flex-wrap items-center justify-end gap-x-4 h-12 px-4">

                <a routerLink="/login">
                    <button type="button"> 
                        Login 
                    </button>
                </a>

                <a routerLink="/">
                    <button type="button"> 
                        Accueil 
                    </button>
                </a>

            </div>

        </nav>
    `,
})


export class TopNavbarComponent {

}