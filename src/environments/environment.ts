// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAUNmlplI7O6mTFrM66WAgRDZ5i0yM3Aao',
    authDomain: 'vife-votador.firebaseapp.com',
    databaseURL: 'https://vife-votador.firebaseio.com',
    projectId: 'vife-votador',
    storageBucket: 'vife-votador.appspot.com',
    messagingSenderId: '514885234233'
  },
  firebaseAuth: { provider: '', method: '' }
};
