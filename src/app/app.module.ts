import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExPipesComponent } from './ex-pipes/ex-pipes.component';
import { CodeInteractionComponent } from './code-interaction/code-interaction.component';
import { ExServicesComponent } from './ex-services/ex-services.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ExPipesComponent,
    CodeInteractionComponent,
    ExServicesComponent,
    EmployeeListComponent,
    HttpObservableComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
