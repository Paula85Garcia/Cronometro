import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cron } from './cron';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  titulo: string = 'Cronómetro Angular';
  tiempo: number = 0;
  private sub?: Subscription;

  // Inyección del servicio
  constructor(private cron: Cron) {}

  IniciarCronometro() {
    if (this.sub) return; // Evita múltiples cronómetros

    this.sub = this.cron.crearCronometro().subscribe((valor: number) => {
      this.tiempo = valor;
    });
  }

  DetenerCronometro() {
    this.sub?.unsubscribe();
    this.sub = undefined;
  }

  reiniciarCronometro() {
    this.DetenerCronometro();
    this.tiempo = 0;
  }
}
