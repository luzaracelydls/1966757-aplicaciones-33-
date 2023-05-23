import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage, ref, getStorage } from '@angular/fire/storage';
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {
  musicUrl: string = '';
  devices: any[] = []; // Propiedad para almacenar la lista de dispositivos Bluetooth encontrados
  volume: number = 50; // Propiedad para almacenar el valor del volumen


  constructor(private nav: NavController, private storage: Storage, private bluetoothSerial: BluetoothSerial) {
    this.bluetoothSerial.enable();
  }

  ngOnInit() {}

  navToInicioTab() {
    this.nav.navigateForward('/tabs/inicio-tab');
  }

  discoverDevices() {
    this.bluetoothSerial.list().then((devices: any) => {
      // La lista de dispositivos Bluetooth se encuentra en la variable "devices"
      console.log(devices);
    });
  }

  connectToDevice(device: any) {
    const address = device.address;

    this.bluetoothSerial.connect(address).subscribe(
      () => {
        console.log('Conexión exitosa');
      },
      (error) => {
        console.log('Error de conexión:', error);
      }
    );
  }

}
