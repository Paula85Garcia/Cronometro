import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cron {
  crearCronometro(): Observable<number> {
    return new Observable<number>((observer) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        observer.next(contador);
      }, 1000);

      // Limpiar cuando se desuscriba
      return () => {
        clearInterval(intervalo);
        console.log('Cronómetro detenido');
      };
    });
  }
}
