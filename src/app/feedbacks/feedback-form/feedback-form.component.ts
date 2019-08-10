import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

interface Feedback {
  feedback: string;
  votes: number;
}

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
  styleUrls: ["./feedback-form.component.css"]
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;
  feedbackCollectionRef: AngularFirestoreCollection<Feedback>;

  constructor(db: AngularFirestore, public formBuilder: FormBuilder) {
    this.feedbackCollectionRef = db.collection<Feedback>("feedbacks");

    this.feedbackForm = this.formBuilder.group({
      feedback: ["", [Validators.required]]
    });
  }

  ngOnInit() {}

  sendFeedback() {
    console.log(this.feedbackForm.value);
    let feedback = this.feedbackForm.controls.feedback.value;
    if (feedback && feedback.trim().length) {
      this.feedbackCollectionRef.add({ feedback: feedback, votes: 0 });
    }

    this.feedbackForm.controls.feedback.setValue("");
  }
}
