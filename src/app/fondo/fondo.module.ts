import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteComponent } from './conte/conte.component';
import { HeaderComponent } from './header/header.component';
import { IzquierdaComponent } from './izquierda/izquierda.component';
import { DerechaComponent } from './derecha/derecha.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    ConteComponent,
    HeaderComponent,
    IzquierdaComponent,
    DerechaComponent,
    FooterComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[
    ConteComponent
  ]
})
export class FondoModule { }
