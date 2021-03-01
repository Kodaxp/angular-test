import { Jugador } from './clases';
describe('Pruebas de clases', () => {
  let jugador = new Jugador();

  beforeEach(() => {
    jugador = new Jugador();
  });

  it('Debe retornar 80 de hp si recibe 20 de daño', () => {
    const result = jugador.recibeDanio(20);
    expect(result).toBe(80);
  });

  it('Debe retornar 50 de hp, si recibe 50 de daño', () => {
    const result = jugador.recibeDanio(50);
    expect(result).toBe(50);
  });

  it('Debe retornar 0 de hp, si recibe 900 de daño', () => {
    const result = jugador.recibeDanio(900);
    expect(result).toBe(0);
  });
});
