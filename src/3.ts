interface Observador {
  actualizar(estado: string): string;
}

class Soporte implements Observador {
  actualizar(estado: string): string {
    return `se actualizo el estado a ${estado}`;
  }
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    public estado: string
  ) {}

  agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.notificarObservadores(nuevoEstado);
  }

  private notificarObservadores(estado: string): void {
    this.observadores.forEach((observador) =>
      console.log(`Soporte notificado: ${observador.actualizar(estado)}`)
    );
  }
}

const soporte = new Soporte();
const equipo = new Equipo('Notebook HP', 'Portátil', 'disponible');
equipo.agregarObservador(soporte);
equipo.cambiarEstado('en reparación');
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.
