import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { UtilitiesColorComponent } from './utilities-color/utilities-color.component';
import { UtilitiesBorderComponent } from './utilities-border/utilities-border.component';
import { UtilitiesAnimationComponent } from './utilities-animation/utilities-animation.component';
import { UtilitiesOtherComponent } from './utilities-other/utilities-other.component';
import { BlankComponent } from './blank/blank.component';
import { ChartsComponent } from './charts/charts.component';
import { TablesComponent } from './tables/tables.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CabinesComponent } from './Components/cabines/cabines.component';
import { PromotionsComponent } from './Components/promotions/promotions.component';
import { VendeursComponent } from './Components/vendeurs/vendeurs.component';
import { CommandesComponent } from './Components/commandes/commandes.component';
import { ManagersComponent } from './Components/managers/managers.component';
import { BoutiquesComponent } from './Components/boutiques/boutiques.component';
import { ModalBoutiqueComponent } from './Components/modal-boutique/modal-boutique.component';
import { MoadalVendeurComponent } from './Components/modal-vendeur/modal-vendeur.component';
import { ModalCabineComponent } from './Components/modal-cabine/modal-cabine.component';
import { ModalMangerComponent } from './Components/modal-manger/modal-manger.component';
import { ModalPromotionComponent } from './Components/modal-promotion/modal-promotion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotFoundComponent,
    ButtonsComponent,
    CardsComponent,
    UtilitiesColorComponent,
    UtilitiesBorderComponent,
    UtilitiesAnimationComponent,
    UtilitiesOtherComponent,
    BlankComponent,
    ChartsComponent,
    TablesComponent,
    SideBarComponent,
    TopBarComponent,
    FooterComponent,
    CabinesComponent,
    PromotionsComponent,
    VendeursComponent,
    CommandesComponent,
    ManagersComponent,
    BoutiquesComponent,
    ModalBoutiqueComponent,
    MoadalVendeurComponent,
    ModalCabineComponent,
    ModalMangerComponent,
    ModalPromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
