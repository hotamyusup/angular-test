import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// const pipes = [];
// const directives = [];
// const components = [];

@NgModule({
  imports: [
    CommonModule,
  ],

  declarations: [
    // ...pipes,
    // ...directives,
    // ...components,
  ],

  exports: [ // exported components, directives, and pipes
    CommonModule,
    ReactiveFormsModule,

    // ...pipes,
    // ...directives,
    // ...components,
  ],
})
export class SharedModule { }
