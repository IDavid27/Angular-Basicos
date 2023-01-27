import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent {

  heroes: string[]=['Spiderman','Iroamn','Hulk'];

  heroeBorrado: string ='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
