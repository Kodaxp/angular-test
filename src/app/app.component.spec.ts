import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {UsersService} from './services/users.service';
import {of} from 'rxjs';
import {userMockService} from '../assets/mocks/user-mocks';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {

  let appComponent;
  let userService: UsersService;

  // --------------------------
  // Ciclo de vida de los Test
  // --------------------------
  // >>> afterAll   >>> Se ejecuta automáticamente 1 sola vez después de terminar todas las pruebas
  // >>> afterEach  >>> Se ejecuta después de cada it
  // >>> beforeEach >>> Se ejecuta antes de cada it
  // >>> beforeAll  >>> Se ejecuta automáticamente 1 sola vez después del describe

  beforeAll( () => {
    console.log(`beforeAll después del describe 1 sola vez`);
  });

  beforeEach(async(() => {

    console.log(`beforeEach antes de cada it`);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        UsersService,
        AppComponent
      ]
    }).compileComponents();

    // --------------------------------
    // Crear instancia del componente
    // --------------------------------
    appComponent = TestBed.get(AppComponent);
    userService = TestBed.get(UsersService);
  }));

  afterEach( () => {
    console.log(`afterEach después de cada it`);
  });

  afterAll( () => {
    console.log(`afterAll al finalizar todas las pruebas 1 sola vez`);
  });

  it('Debe crear el componente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('El valor de myVar debe ser igual a Hola Mundo', () => {
    // -----------------------------------
    // Almacenar el valor de la variable
    // -----------------------------------
    const myVar = appComponent.myVar;
    // -------------------------------------------------
    // Comprobación del valor de la variable con expect
    // -------------------------------------------------
    expect(myVar).toEqual('Hola Mundo');
  });

  it('La variable saludo debe contener Joel', () => {
    // -----------------------------------
    // Almacenar el valor de la variable
    // -----------------------------------
    const saludo = appComponent.saludo;
    // -------------------------------------------------
    // Comprobación del valor de la variable con expect
    // -------------------------------------------------
    expect(saludo).toContain('Joel');
  });

  it('Debe retornar TRUE', () => {
    // -----------------------------------
    // Almacenar el valor de la variable
    // -----------------------------------
    const result = appComponent.par(10);
    // -------------------------------------------------
    // Comprobación del valor de la variable con expect
    // -------------------------------------------------
    expect(result).toBeTruthy();
  });

  it('Debe retornar FALSE', () => {
    // -----------------------------------
    // Almacenar el valor de la variable
    // -----------------------------------
    const result = appComponent.par(9);
    // -------------------------------------------------
    // Comprobación del valor de la variable con expect
    // -------------------------------------------------
    expect(result).toBeFalsy();
  });

  it('Debe llamar a userService y al método getAll() para obtener todos los usuarios', () => {

    const users = spyOn(userService, 'getAll').and.callFake( () => {
      return of(userMockService);
    });

    appComponent.ngOnInit();

    expect(users).toHaveBeenCalled();

  });
});
