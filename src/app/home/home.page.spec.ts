import { ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
=======

>>>>>>> 9a2b84d058563388d5146ff42d7f7631005287f6
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

<<<<<<< HEAD
  beforeEach(() => {
=======
  beforeEach(async () => {
>>>>>>> 9a2b84d058563388d5146ff42d7f7631005287f6
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
