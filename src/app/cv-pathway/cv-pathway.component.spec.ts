import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVPathwayComponent } from './cv-pathway.component';

describe('CVPathwayComponent', () => {
  let component: CVPathwayComponent;
  let fixture: ComponentFixture<CVPathwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVPathwayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CVPathwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
