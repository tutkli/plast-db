import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAnimesComponent } from './top-animes.component';

describe('RecommendedAnimesComponent', () => {
  let component: TopAnimesComponent;
  let fixture: ComponentFixture<TopAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopAnimesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TopAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
