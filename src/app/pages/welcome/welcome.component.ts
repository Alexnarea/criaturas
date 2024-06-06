import { Component, OnInit } from '@angular/core';
import { CriaturasFormComponent } from '../../components/criaturas-form/criaturas-form.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  imports: [
    CriaturasFormComponent
  ],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
