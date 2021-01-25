import {getTestBed, TestBed} from '@angular/core/testing';
import {UsersService} from './users.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UsersInterface} from '../models/users.interface';
import {userMockService} from '../../assets/mocks/user-mocks';

describe('UsersService', () => {

  let userService: UsersService;

  let injector: TestBed;
  let httpMocks: HttpTestingController; // Simular peticiones

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    // --------------------------------------------------------
    // Tener acceso a las variables limpias antes de cada it()
    // --------------------------------------------------------
    injector = getTestBed();
    httpMocks = injector.get(HttpTestingController);

    // --------------------------------------------------------
    // Generar la instancia del servicio antes de cada it()
    // --------------------------------------------------------
    userService = TestBed.get(UsersService);
  });

  afterEach(() => {
    // ---------------------------------------------
    // Verificar que no hay solicitudes pendientes
    // ---------------------------------------------
    httpMocks.verify();
  });

  it('Debe ser creado', () => {
    expect(userService).toBeTruthy();
  });

  it('Debe retornar un Observable de Array de Usuarios', () => {

    // Todo: hacer pruebas con otros servicios a ver si funcionan de la misma forma

    // ------------------------------------
    // Mock para la respuesta del servicio
    // ------------------------------------
    let mockUser: UsersInterface[] = userMockService;

    // -----------------------------
    // Nos subscribimos al servicio
    // -----------------------------
    userService.getAll().subscribe( users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUser);
      expect(users[0].login).toBeDefined();
    });

    const req = httpMocks.expectOne('https://api.github.com/users'); // Validamos la url del servicio consultado
    expect(req.request.method).toBe('GET'); // Validamos que sea un method GET
    // --------------------------------------------------------------------
    // Proporcionar valores ficticios como respuesta a nuestras peticiones
    // --------------------------------------------------------------------
    req.flush(mockUser);

  });
});
