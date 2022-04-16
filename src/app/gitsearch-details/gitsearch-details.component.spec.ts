import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsearchDetailsComponent } from './gitsearch-details.component';

describe('GitsearchDetailsComponent', () => {
  let component: GitsearchDetailsComponent;
  let fixture: ComponentFixture<GitsearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitsearchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
