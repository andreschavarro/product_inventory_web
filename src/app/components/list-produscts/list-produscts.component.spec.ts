import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProdusctsComponent } from './list-produscts.component';

describe('ListProdusctsComponent', () => {
  let component: ListProdusctsComponent;
  let fixture: ComponentFixture<ListProdusctsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProdusctsComponent]
    });
    fixture = TestBed.createComponent(ListProdusctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
