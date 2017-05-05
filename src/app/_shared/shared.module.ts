import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// modules

// components


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [ ]
})
export class _SharedModule { }
