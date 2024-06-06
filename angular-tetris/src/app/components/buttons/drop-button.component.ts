// user-list.component.ts
import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
    selector: 'drop-button',
    template: `
        <button class="border border-black h-16 w-16">
        </button>
    `,
})


export class DropButtonComponent {

}