import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacarrerasComponent } from './listacarreras.component';

describe('ListacarrerasComponent', () => {
  let component: ListacarrerasComponent;
  let fixture: ComponentFixture<ListacarrerasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListacarrerasComponent]
    });
    fixture = TestBed.createComponent(ListacarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
