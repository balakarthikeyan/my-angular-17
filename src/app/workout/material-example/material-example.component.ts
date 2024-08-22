import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material.module';

@Component({
  selector: 'app-material-example',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './material-example.component.html',
  styleUrl: './material-example.component.css'
})
export class MaterialExampleComponent {

}
