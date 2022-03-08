import { NgModule } from '@angular/core';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
   
    LoginComponent,
    RegisterComponent,
    CreateAccountComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
   
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class NetBankingModule { }
