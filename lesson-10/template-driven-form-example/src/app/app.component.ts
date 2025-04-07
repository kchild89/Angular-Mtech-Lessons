import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // also fixed "styleUrl" to "styleUrls"
})
export class AppComponent {
  title = 'template-driven-form-example';
}
