import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth-service';
import { Router } from '@angular/router';

class AuthServiceMock {
  login(key: string) {
    return of(key);
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [{ provide: AuthService, useClass: AuthServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate key', () => {
    component.form.controls['key'].setValue('testexample');
    expect(component.form.valid).toBeTruthy();
  });

  it('should call AuthService.login() when onSubmit() is called', () => {
    const authService = TestBed.inject(AuthService);
    const authServiceSpy = spyOn(authService, 'login').and.callThrough();
    const routerSpy = spyOn(router, 'navigateByUrl').and.stub();

    component.form.controls['key'].setValue('testexample');
    component.onSubmit();

    expect(authServiceSpy).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith('/home');
  });

  it('should display error message when key is required but not provided', () => {
    component.form.controls['key'].setValue('');
    expect(component.form.valid).toBeFalsy();
    expect(component.form.get('key')?.errors?.['required']).toBeTruthy();
  });

  it('should disable submit button when form is invalid', () => {
    fixture.detectChanges();

    component.form.controls['key'].setValue('');
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.disabled).toBeTruthy();
  });
});
