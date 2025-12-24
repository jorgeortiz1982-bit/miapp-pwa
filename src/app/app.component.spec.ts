import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
=======
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
>>>>>>> 9a2b84d058563388d5146ff42d7f7631005287f6
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])]
    }).compileComponents();
<<<<<<< HEAD
  });

  it('should create the app', () => {
=======
    
>>>>>>> 9a2b84d058563388d5146ff42d7f7631005287f6
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
<<<<<<< HEAD

  it('should have menu labels', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(12);
    expect(menuItems[0].textContent).toContain('Inbox');
    expect(menuItems[1].textContent).toContain('Outbox');
  });

  it('should have urls', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(12);
    expect(menuItems[0].getAttribute('href')).toEqual(
      '/folder/inbox'
    );
    expect(menuItems[1].getAttribute('href')).toEqual(
      '/folder/outbox'
    );
  });
=======
>>>>>>> 9a2b84d058563388d5146ff42d7f7631005287f6
});
