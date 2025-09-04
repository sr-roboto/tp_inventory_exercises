class Inventario {
  private static instancia: Inventario;
  private equipos: [{ nombre: string; tipo: string; estado: string }];
  constructor() {}

  public static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.equipos.push({ nombre, tipo, estado });
  }

  public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.equipos;
  }
}

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo('Notebook HP', 'Portátil', 'disponible');
console.log(inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7
