import { db } from './firebase.js';
import { collection, addDoc } from 'firebase/firestore';

async function testWrite() {
  await addDoc(collection(db, 'testData'), {
    message: 'It works!',
    time: new Date()
  });
}

testWrite();
