import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './Components/Auth/inscription/inscription.component';
import { ConnexionComponent } from './Components/Auth/connexion/connexion.component';
import { MotDePasseComponent } from './Components/Auth/motdepasse/mot-de-passe.component';
import { DashbordComponent } from './Components/Auth/dashbord/dashbord.component';
import { MotdepasseoublierComponent } from './Components/Auth/motdepasseoublier/motdepasseoublier.component';
import { ArchiveComponent } from './Components/Auth/archive/archive.component';
import { CorbeilleComponent } from './Components/Auth/corbeille/corbeille.component';
import { SoumissionComponent } from './Components/Auth/soumission/soumission.component';


const routes: Routes = [
  {
    path: '',
    component: InscriptionComponent
  },
  {
    path: 'Connexion',
    component: ConnexionComponent
  },
  
  {
    path: 'motdepasse',
    component:  MotDePasseComponent
  },
  
  {
    path:'dashbord',
    component:  DashbordComponent
  },
  
  {
    path:'motdepasseoublier',
    component:  MotdepasseoublierComponent
  },

  {
    path:'archive',
    component:  ArchiveComponent
  },
  
  {
    path:'corbeille',
    component:  CorbeilleComponent
  },
  
  {
    path:'soumission',
    component:  SoumissionComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
