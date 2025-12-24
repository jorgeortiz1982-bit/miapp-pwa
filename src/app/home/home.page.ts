import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BluetoothLe } from '@capacitor-community/bluetooth-le';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // ← esto es lo clave
})
export class HomePage {

  temperatura: string = '';

  constructor() {}

  async scanAndConnect() {
    await BluetoothLe.initialize();

    const devices = await BluetoothLe.requestDevice({
      services: [],
      optionalServices: [],
      namePrefix: 'HM-10'
    });

    if (devices) {
      const deviceId = devices.deviceId;

      await BluetoothLe.connect({ deviceId });

      await BluetoothLe.startNotifications({
        deviceId,
        service: 'FFE0',
        characteristic: 'FFE1'
      }).then((result: any) => {
        const data = new TextDecoder().decode(result.value);
        this.temperatura = data;
        console.log('Temperatura:', data);
      });
    }
  }
}
