import { Component } from '@angular/core';
import { TestservicesService } from '../../services/testservices.service';

@Component({
  selector: 'app-test-data',
  standalone: true,
  imports: [],
  templateUrl: './test-data.component.html',
  styleUrl: './test-data.component.scss',
})
export class TestDataComponent {
  ultimoResultado = 0;
  title: string = 'otro titulo diferente';
  data = { total: 1, titlo: 'saludos' };

  constructor(public testService: TestservicesService) {}
  suma() {
    this.testService.increment();
  }
}
