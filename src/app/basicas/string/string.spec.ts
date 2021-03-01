import { mensaje } from './string';

describe('Pruebas de string', () => {
  it('Debe regresar un string', () => {
    const result = mensaje(`Joel Zúñiga`);
    expect(typeof result).toBe(`string`);
  });

  it('Debe regresar un saludo con el nombre que se le envió', () => {
    const nombreEnviado = `Joel Zúñiga`;
    const result = mensaje(`${nombreEnviado}`);
    expect(result).toContain(nombreEnviado);
  });
});
