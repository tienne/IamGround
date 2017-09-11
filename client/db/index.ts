import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';

import * as fb from 'firebase-admin';
import * as datas from './data/';
import {firebaseConfig} from '../src/environments/firebase.config';

const fbKey = require('./firebase-key.json');
const database = fb.database;
const appConfig = {
  credential: fb.credential.cert(fbKey),
  databaseURL: firebaseConfig.databaseURL
};

fb.initializeApp(appConfig);

const databases: string[] = ['skills', 'projects', 'translations', 'tags'];
const refs = [];

for (const db of databases) {
  const ref = database().ref(db);
  refs.push(Observable.fromPromise(ref.set(datas[db])));
}
// 모든 데이터 전송이 완료되면 프로세스 종료
Observable.forkJoin(refs).subscribe(() => {
  process.exit(0);
});
