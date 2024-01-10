import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormFieldComponent } from './search-form-field.component';

describe('SearchFormFieldComponent', () => {
  let component: SearchFormFieldComponent;
  let fixture: ComponentFixture<SearchFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFormFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
