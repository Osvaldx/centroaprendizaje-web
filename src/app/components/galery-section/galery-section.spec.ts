import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerySection } from './galery-section';

describe('GalerySection', () => {
  let component: GalerySection;
  let fixture: ComponentFixture<GalerySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
