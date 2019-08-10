import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";

// forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// firebase
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";

// feature modules
import { FeedbacksModule } from "./feedbacks/feedbacks.module";

@NgModule({
  imports: [
    BrowserModule,

    // forms
    FormsModule,
    ReactiveFormsModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebase, "demo"), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

    // features
    FeedbacksModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
