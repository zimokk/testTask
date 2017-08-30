import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopManagingComponent } from './shop-managing.component';

describe('ShopManagingComponent', () => {
  let component: ShopManagingComponent;
  let fixture: ComponentFixture<ShopManagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopManagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopManagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
