import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

import { AngularFireAuth } from 'angularfire2/auth';

interface Feedback {
  feedback: string;
  votes: number;
}

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  feedbacks$: Observable<any[]>;
  feedbackCollectionRef: AngularFirestoreCollection<Feedback>;

  constructor(
    db: AngularFirestore,
  ) {

    this.feedbackCollectionRef = db.collection<Feedback>('feedbacks');

    this.feedbacks$ = db.collection('feedbacks').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Feedback[];
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });;
  }

  ngOnInit() {
  }

  voteUp(f) {
    console.log('update this feedback: ', f);
    this.feedbackCollectionRef.doc(f.id).update({ feedback: f.feedback, votes: f.votes += 1 });
  }

}
