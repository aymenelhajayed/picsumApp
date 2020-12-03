import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DetailComponent} from './detail.component';
import {DetailRoutingModule} from './detail-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        DetailRoutingModule
    ],
    declarations: [DetailComponent]
})
export class DetailPageModule {}
