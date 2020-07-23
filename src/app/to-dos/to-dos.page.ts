import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import * as firebase from'firebase';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.page.html',
  styleUrls: ['./to-dos.page.scss'],
})
export class ToDosPage implements OnInit {
   todos : any[] = [];
   userId : string;
  constructor(private navCtrl: NavController , private toastCtrl:ToastController) { 
    this.userId = firebase.auth().currentUser.uid;
    this.getTodos();
  }

  ngOnInit() {
  }
  goToAddTodo() {
    this.navCtrl.navigateForward(['/add-todo']);
  }
  getTodos(){
    firebase.firestore().collection("todos")
    .where("owner","==",this.userId)
    .where("status","==","incomplete")
    .onSnapshot((querySnapShot)=>{
      this.todos = querySnapShot.docs;
    });
  }
  markCompleted(document: firebase.firestore.QueryDocumentSnapshot) {
    
    firebase.firestore().collection("todos").doc(document.id).set({
      "status":"completed"
    },{
      merge:true
    }).then(()=>{
       this.toastCtrl.create({
         message:"todo Completed",
         duration:2000
       }).then((toast)=>{
         toast.present();
       })    
    }).catch((err)=>{
      err=err.message;

    })
  }
  logout() {
    firebase.auth().signOut().then(()=>{
      this.navCtrl.navigateRoot("/login");
    }).catch((err)=>{
      console.log(err);
    })
  }
  /* getDate(timestamp: firebase.firestore.Timestamp) {
    let date = timestamp.toDate();
    return date.toLocaleDateString();

  } */

}
