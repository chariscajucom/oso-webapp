import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './components/navbar/navbar.module';
import { SidebarModule } from './admin/sidebar/sidebar.module';
import { DashNavbarModule } from './admin/shared/navbar/dash-navbar.module';
import { FooterModule } from './admin/shared/footer/footer.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { FileUploadModule } from 'ng2-file-upload';
// import { BsModalModule  } from 'ng2-bs3-modal';

import { FrontComponent } from './components/front.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';


import { AuthService } from './myservices/auth.service';
import { StudentsService } from './myservices/students.service';
import { NewsService } from './myservices/news.service';

import { AuthGuard } from './guard/auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),    
    RouterModule.forRoot(AppRoutes),
    FileUploadModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule,
    DashNavbarModule,
    FooterModule
    // BsModalModule 

  ],
  providers: [ AuthService, StudentsService, AuthGuard, NewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
