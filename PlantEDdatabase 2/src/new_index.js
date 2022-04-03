import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Connecting firebase
const firebaseApp = initializeApp({
  apiKey: "AIzaSyC7rC18pqqy0cFLL-Gj9YoEBQq2eGItTb0",
  authDomain: "planted-a9629.firebaseapp.com",
  databaseURL:
    "https://planted-a9629-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "planted-a9629",
  storageBucket: "planted-a9629.appspot.com",
  messagingSenderId: "380909345738",
  appId: "1:380909345738:web:5bb67f8deba1bcadb2cd33",
});
const auth = getAuth(firebaseApp);


import { getStorage, ref as refstore, getDownloadURL } from "firebase/storage";
import { getDatabase, ref, push, set,orderByChild,equalTo,query,get } from "firebase/database";

const db = getDatabase();

// add photo and plantid relation in firebase realtime database
function addPhotoPlantRelations(plantId, photo) {
  const postListRef = ref(db, 'photos');
  const newPostRef = push(postListRef);
  set(newPostRef, {
      plantid: plantId,
      photo:photo
  });
}

//photoname is smth.jpg
function showimage(photoname) {
  const storage = getStorage();
  getDownloadURL(refstore(storage, `plants/${photoname}`))
  .then((url) => {
    //  inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
  });
}

showimage("tomato.jpg");
// get photoname by plant id through relations stored in firebase and render it to image tag in html
function getphotobyid(plantid) {
const that = query(ref(db, 'photos/' ), orderByChild('plantid'),equalTo(plantid))
get(that).then((snapshot) => {
  if (snapshot.exists()) {
    snapshot.forEach((element) => {
      const storage = getStorage();
      console.log("photo of plant id " + plantid + "is shown on webpage")
      var id = element.val().photo;
getDownloadURL(refstore(storage, `plants/${id}.jpg`))
  .then((url) => {
    //  inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
  });
    })
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}
getphotobyid(2);

// get plant id by photo name output from image search engine
// input must be photo.format or photo_2.format
function getidbyphoto(photo) {
  var plant = null;
  var count = (photo.match(/_/g)|| []).length;
  if (count >1) {
    plant = photo.substring(0,photo.lastIndexOf('_'));
  } else {
    plant = photo.substring(0,photo.lastIndexOf('.'));
  }
  const that = query(ref(db, 'photos/' ), orderByChild('photo'),equalTo(plant))
get(that).then((snapshot) => {
  if (snapshot.exists()) {
    snapshot.forEach((element) => {
      console.log(`plant id for photo named ${photo} is ` + element.val().plantid)
    })
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

getidbyphoto("aubergine.jpg");
