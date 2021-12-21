import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UserStarredComponent } from './user-starred.component';

describe('UserStarredComponent', () => {
  let component: UserStarredComponent;
  let fixture: ComponentFixture<UserStarredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStarredComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserStarredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
