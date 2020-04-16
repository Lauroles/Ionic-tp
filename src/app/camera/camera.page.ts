import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';
import {NavController} from '@ionic/angular';
import {Camera} from '@ionic-native/camera/ngx';
import {Platform} from '@ionic/angular';




@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  private picture: string;

  constructor(public navCtrl: NavController,
              private cameraPreview: CameraPreview) { }

  ngOnInit() {

    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'rear',
      tapPhoto: true,
      previewDrag: true,
      alpha: 1
    }

// start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        });
  }
}
