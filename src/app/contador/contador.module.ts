import { NgModule } from '@angular/core';
import { ContadorComponent } from './conatdor/contador.component';

@NgModule({
    declarations:[
       ContadorComponent 
    ],
    exports:[
        ContadorComponent
    ]
})
export class ContadorModule{}