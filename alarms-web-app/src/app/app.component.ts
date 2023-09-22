import { Component, AfterViewInit } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'alarms-web-app';

  ngAfterViewInit(): void {
    // Inicializa los popovers después de que el componente y el DOM estén listos
  }
}
