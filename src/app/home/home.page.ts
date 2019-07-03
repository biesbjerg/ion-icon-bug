import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(
    protected modalController: ModalController
  ) {}

    async openModal() {
        const modal = await this.modalController.create({
            component: HomePage
        });
        return await modal.present();
    }

}
