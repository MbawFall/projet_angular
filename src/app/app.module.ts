import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './Components/Auth/inscription/inscription.component';
import { ConnexionComponent } from './Components/Auth/connexion/connexion.component';
import { MotDePasseComponent } from './Components/Auth/motdepasse/mot-de-passe.component';
import { DashbordComponent } from './Components/Auth/dashbord/dashbord.component';
import { MotdepasseoublierComponent } from './Components/Auth/motdepasseoublier/motdepasseoublier.component';
import { ArchiveComponent } from './Components/Auth/archive/archive.component';
import { CorbeilleComponent } from './Components/Auth/corbeille/corbeille.component';
import { SoumissionComponent } from './Components/Auth/soumission/soumission.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    MotDePasseComponent,
    DashbordComponent,
    MotdepasseoublierComponent,
    ArchiveComponent,
    CorbeilleComponent,
    SoumissionComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
