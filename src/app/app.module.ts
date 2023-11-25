import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { pcsComponent } from './pc/pc.component';
import { AddpcComponent } from './add-pc/AddpcComponent';
import { FormsModule } from '@angular/forms';
import { UpdatepcComponent } from './update-pc/update-pc.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParOsComponent } from './recherche-par-os/recherche-par-os.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    pcsComponent,
    AddpcComponent,
    UpdatepcComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParOsComponent,
    SearchFilterPipe,
    RechercheParNomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
