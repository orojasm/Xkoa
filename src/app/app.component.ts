import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public mostrarTitulo(){
    console.log("click");
    // Usamos jQuery con normalidad
    $(".title").slideToggle();
  }

}
