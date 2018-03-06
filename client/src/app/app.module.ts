import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { NavbarModule } from './components/navbar/navbar.module';
import { SidebarModule } from './admin/sidebar/sidebar.module';
import { DashNavbarModule } from './admin/shared/navbar/dash-navbar.module';
import { FooterModule } from './admin/shared/footer/footer.module';
import { FrontComponent } from './components/front.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from '././myservices/auth.service';
import { BlogService } from '././myservices/blog.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AdminComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NavbarModule,
    SidebarModule,
    DashNavbarModule,
    FooterModule

  ],
  providers: [ AuthService, BlogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
