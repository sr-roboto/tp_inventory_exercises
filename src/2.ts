interface Equipo {
  detalles(): string;
}

class EquipoDesktop implements Equipo {
  constructor(
    private tipo: string,
    private nombre: string,
    private ram: string,
    private procesador: string
  ) {}

  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoNoteboook implements Equipo {
  constructor(
    private tipo: string,
    private nombre: string,
    private ram: string,
    private procesador: string
  ) {}

  detalles(): string {
    return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ): Equipo {
    if (tipo === 'Desktop') {
      return new EquipoDesktop(tipo, nombre, ram, procesador);
    } else if (tipo === 'Notebook') {
      return new EquipoNoteboook(tipo, nombre, ram, procesador);
    }
    throw new Error('Tipo de equipo no soportado');
  }
}

const factory = new EquipoFactory();
const Notebook = factory.crearEquipo('Notebook', 'Dell XPS', '16GB', 'i7');
console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7
