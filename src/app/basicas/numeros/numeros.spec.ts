import { incrementar } from './numeros';

describe('Pruebas de números', () => {
  it('Debe retornar 100, si el número ingresado es mayor a 100', () => {
    const result = incrementar(101);
    expect(result).toBe(100);
  });

  it('Debe retornar el número + 1 si el número ingresado es menor a 100', () => {
    const numeroIngresado = 50;
    const result = incrementar(numeroIngresado);
    expect(result).toBe(numeroIngresado + 1);
  });
});
