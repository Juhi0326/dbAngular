// Core dependecies
import { TestBed, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
// Third party dependencies
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Custom lcoal dependencies
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        NgbModule,
        AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
      ],
      declarations: [
        AppComponent,
        NavBarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dbAngular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('dbAngular');
  });

});
