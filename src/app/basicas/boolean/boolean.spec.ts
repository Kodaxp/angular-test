import { usuarioIngresado } from './boolean';
describe('Pruebas de booleanos', () => {
  it('Debe regresar true', () => {
    const result = usuarioIngresado();
    expect(result).toBeTruthy();
  });
});
