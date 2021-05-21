import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './navegacao/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [    
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig,{useHash: false})],
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,  
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule

  ],
  providers: [
    {provide: APP_BASE_HREF,useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
