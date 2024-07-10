import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersLabelsComponent } from './filters-labels.component';

describe('FiltersLabelsComponent', () => {
  let component: FiltersLabelsComponent;
  let fixture: ComponentFixture<FiltersLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersLabelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
