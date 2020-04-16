import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPage } from './camera.page';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import {RouterModule} from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      RouterModule.forChild([
      {
        path: '',
        component: CameraPage
      }
    ])
  ],
  declarations: [CameraPage],
  providers: [CameraPreview]
})
export class CameraPageModule {}
