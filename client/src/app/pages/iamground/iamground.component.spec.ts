import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IamgroundComponent } from './iamground.component';

describe('IamgroundComponent', () => {
  let component: IamgroundComponent;
  let fixture: ComponentFixture<IamgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IamgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IamgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
