import {Component} from '@angular/core';
import {Platform, NavController} from 'ionic-angular';
import {Flashlight} from 'ionic-native';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    public isAvailable: boolean;
    public isOn: boolean;
    constructor(private platform: Platform, private navCtrl: NavController) {
        platform.ready().then(() => {
            console.log("Home ready");
            if(Flashlight.available) {
                this.isAvailable = true;
            } else {
                this.isAvailable = false;
            }
        });
    }

    turnOn(event) {
        if(this.isAvailable) {
            Flashlight.switchOn();
            this.isOn = true;
        }
    }

    turnOff(event) {
        if(this.isAvailable && this.isOn) {
            Flashlight.switchOff();
            this.isOn = false;
        }
    }
}
