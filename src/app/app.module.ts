import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VisualizerComponent } from './visualizer/visualizer.component';
import { ConfigurerComponent } from './configurer/configurer.component';

import {ChartsModule} from 'ng2-charts';
import { GraphsModule } from './graphs/graphs.module';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VisualizerComponent,
    ConfigurerComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    GraphsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
