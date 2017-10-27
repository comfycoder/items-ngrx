import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule, JsonpModule } from '@angular/http';

import './rxjs-extensions';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { ConfigService } from './config.service';
import { SpinnerService } from './services/spinner.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        JsonpModule,
        RouterTestingModule,
        SharedModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ConfigService,
        SpinnerService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
