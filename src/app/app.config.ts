import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { AuthModule } from './auth/auth.module'; // ✅ IMPORTADO

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "face-gods",
      "appId": "1:824147756521:web:af4d771c24033a5f673778",
      "storageBucket": "face-gods.firebasestorage.app",
      "apiKey": "AIzaSyAclCWjCdJnvU824yF0OGLt1RqZd8BNGUU",
      "authDomain": "face-gods.firebaseapp.com",
      "messagingSenderId": "824147756521"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    importProvidersFrom(AuthModule) // ✅ AGREGADO
  ]
};
