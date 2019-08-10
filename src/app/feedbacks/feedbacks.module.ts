import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { FeedbackListComponent } from "./feedback-list/feedback-list.component";
import { FeedbackFormComponent } from "./feedback-form/feedback-form.component";

// angular material
import {
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatIconModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,

    MatListModule,
    MatInputModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [FeedbackListComponent, FeedbackFormComponent],
  exports: [FeedbackListComponent, FeedbackFormComponent]
})
export class FeedbacksModule {}
