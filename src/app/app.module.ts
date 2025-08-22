import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProductCardComponent } from './components/home/product-card/product-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    TruncatePipe,
    NavbarComponent,
    CartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
