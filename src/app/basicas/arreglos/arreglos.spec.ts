import { arregloDeSuperHeroes } from './arreglos';
describe('Pruebas de arreglos', () => {
  it('Debe contener al menos 3 Super Heroes', () => {
    const result = arregloDeSuperHeroes();
    expect(result.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir Spider-Man y Capitan America', () => {
    const result = arregloDeSuperHeroes();
    expect(result).toContain('Spider-Man');
    expect(result).toContain('Capitan America');
  });
});
