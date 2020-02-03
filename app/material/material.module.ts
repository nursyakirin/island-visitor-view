import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule 
} from '@angular/material';

const material =[
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
