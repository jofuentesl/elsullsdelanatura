// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  /* vinculamos proyecto a firebase */
  firebaseConfig: {
    apiKey: "AIzaSyBFq9wYam3L9dzRiHTNmIicpf5B78BX69s",
    authDomain: "elsullsdelanatura-9382b.firebaseapp.com",
    projectId: "elsullsdelanatura-9382b",
    storageBucket: "elsullsdelanatura-9382b.appspot.com",
    messagingSenderId: "922199898914",
    appId: "1:922199898914:web:3e2c6321fba890e9a9437b",
    measurementId: "G-1681496E1S"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
