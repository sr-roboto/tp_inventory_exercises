interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

// Sistema viejo - interfaz incompatible
class InventarioViejo {
  private items: string[] = [];

  agregarItem(item: string): void {
    this.items.push(item);
  }
}

// Implementación del nuevo sistema
class Inventario {
  private equipos: Equipo[] = [];

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.equipos.push({ nombre, tipo, estado });
  }
}

// Adaptador que permite usar InventarioViejo con la nueva interfaz
class AdaptadorInventario {
  private inventarioViejo: InventarioViejo;
  private equipos: Equipo[] = [];

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    // Adaptamos la nueva interfaz al sistema viejo
    const itemViejo = `${nombre}|${tipo}|${estado}`;
    this.inventarioViejo.agregarItem(itemViejo);

    // También mantenemos la estructura nueva para listar
    this.equipos.push({ nombre, tipo, estado });
  }

  listarEquipos(): Equipo[] {
    return this.equipos;
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo('Servidor Dell', 'Servidor', 'disponible');
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
