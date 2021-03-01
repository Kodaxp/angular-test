import { Jugador2 } from './jugador2';
describe('Pruebas Event Emitter', () => {
  let jugador: Jugador2;

  beforeEach(() => {
    jugador = new Jugador2();
  });

  it('Debe emitir un evento cuando recibe daño y morir :c', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe((hp) => (nuevoHP = hp));

    jugador.recibeDanio(900);

    expect(nuevoHP).toBe(0);
  });

  it('Debe emitir un evento cuando recibe daño y sobrevivir', () => {
    let nuevoHP = 0;

    jugador.hpCambia.subscribe((hp) => (nuevoHP = hp));

    jugador.recibeDanio(20);

    expect(nuevoHP).toBe(80);
  });
});
