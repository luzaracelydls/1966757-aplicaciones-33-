import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage, ref, uploadBytes,listAll,getDownloadURL} from '@angular/fire/storage';
import { error } from 'console';
import { AuthService } from '../services/auth.service';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from '@angular/fire/auth';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {


  images: string[];


  constructor(private nav:NavController,private storage:Storage,private afAuth:Auth,private authService:AuthService) { 
    this.images = []
  }

  ngOnInit() {
    this.getImages();
  }


  navToTabs(){
    this.nav.navigateForward('/tabs')
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage,`images/${file.name}`);

    uploadBytes(imgRef,file)
      .then(Response=>console.log(Response))
      .catch(error=>console.log(error))
  }


  getImages(){
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
    .then(async Response=>{
      console.log(Response)
      this.images = []
      for (let item of Response.items){
       const url = await getDownloadURL(item);
       this.images.push(url)
      }

    })
    .catch(error=>console.log(error));
  }

 
  logout(){
    this.authService.logout();
    this.nav.navigateForward('/home')
  }

}
