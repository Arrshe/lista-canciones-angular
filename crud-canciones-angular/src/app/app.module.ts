import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { AgregarCancionComponent } from './components/agregar-cancion/agregar-cancion.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [ AppComponent, CancionesComponent, AgregarCancionComponent, HeaderComponent ],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
