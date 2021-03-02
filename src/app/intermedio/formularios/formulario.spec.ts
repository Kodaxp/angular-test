import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';
describe('Pruebas formularios', () => {
  let componente: FormularioRegister;

  beforeEach(() => (componente = new FormularioRegister(new FormBuilder())));

  it('Debe crear un formulario con dos campos', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {
    const formEmail = componente.form.get('email');
    formEmail.setValue('');

    expect(formEmail.valid).toBeFalsy();
  });

  it('El email debe tener formato valido', () => {
    const formEmail = componente.form.get('email');
    formEmail.setValue('joelzuniga@outlook.cl');

    expect(formEmail.valid).toBeTruthy();
  });
});
