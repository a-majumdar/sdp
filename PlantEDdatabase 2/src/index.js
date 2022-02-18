import {initializeApp} from'firebase/app';
import {getAuth,onAuthStateChanged} from 'firebase/auth';

//Connecting firebase
const firebaseApp = initializeApp({
    apiKey: "AIzaSyC7rC18pqqy0cFLL-Gj9YoEBQq2eGItTb0",
    authDomain: "planted-a9629.firebaseapp.com",
    databaseURL: "https://planted-a9629-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "planted-a9629",
    storageBucket: "planted-a9629.appspot.com",
    messagingSenderId: "380909345738",
    appId: "1:380909345738:web:5bb67f8deba1bcadb2cd33"
})
const auth = getAuth(firebaseApp);

import { getDatabase, ref, set,get,child,orderByChild,equalTo,query,push} from "firebase/database";
// add data to each table functions
// function addUserDetails(userId, name, email,password) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     password:password
//   });
// }

function addUserPropagatorRelations(userId, propagatorId) {
  const db = getDatabase();
  set(ref(db, 'User_Propagator_relations/' + userId), {
    "propagatorId" : propagatorId
  });
}

function addPropagatorDetails( propagatorId,plantId,soilType) {
  const db = getDatabase();
  set(ref(db, 'Propagator_Details/' + propagatorId), {
    plantId:plantId,
    soilType:soilType
  });
}


function addPropagatorReadings(propagatorId, sensorType, sampleTime,reading) {
  const db = getDatabase();
  set(ref(db, 'Propagator_Readings/' + propagatorId), {
    sensorType:sensorType,
    sampleTime:sampleTime,
    reading:reading,
  });
}

function addTemperatureReadings(propagatorId, sampleTime,reading) {
  const db = getDatabase();
  set(ref(db, 'Temperature_Readings/' + propagatorId), {
    sampleTime:sampleTime,
    reading:reading,
  });
}

function addSunlightReadings(propagatorId, sampleTime,reading) {
  const db = getDatabase();
  set(ref(db, 'Sunlight_Readings/' + propagatorId), {
    propagatorId:propagatorId,
    sampleTime:sampleTime,
    reading:reading,
  });
}

function addMoistureReadings(propagatorId, sampleTime,reading) {
  const db = getDatabase();
  set(ref(db, 'Moisture_Readings/' + propagatorId), {
    propagatorId:propagatorId,
    sampleTime:sampleTime,
    reading:reading,
  });
}
// addTemperatureReadings("01","today","25")
// addSunlightReadings("01","today","500")
// addMoistureReadings("01","today","3")

// function addPlantDetails(plantId, commonName, speciesName,className, family,genus ) {
//   const db = getDatabase();
//   set(ref(db, 'Plant_Details/' + plantId), {
//     commonName:commonName,
//     speciesName:speciesName,
//     class:className,
//     family:family,
//     genus:genus
//   });
// }
// function addPropagatorConditions(plantId, temperature, humidity,watering,light,soilph,soiltype) {
//   const db = getDatabase();
//   set(ref(db, 'Propagator_Conditions/' + plantId), {
//     temperature:temperature,
//     humidity:humidity,
//     watering:watering,
//     light:light,
//     soilpH:soilph,
//     preferredSoilType:soiltype
//   });
// }
// addUserDetails("02","casey","s1969859@ed.ac.uk","wonttellu")
// addUserPropagatorRelations("01","01")
// addPropagatorDetails("01","01","clay")
// addPropagatorReadings("01","temperature","today","24")
// addPlantDetails("01","basil","babe","Angiospermae","famfam","genus")
// addPropagatorConditions("01",35,1,1,1,5,"clay")


//get relevant information in firebase by userid
const db = ref(getDatabase());

function getAllInfo(userId) {
  console.log(userId)
  var propagatorId = null
  var plantId = null
  //userid->propagatorid
  get(child(db, `User_Propagator_relations/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    propagatorId = snapshot.val().propagatorId
    console.log("propagatorid: "+ propagatorId);
  } else {
    console.log("No propagator data available");
  }
  })
  console.log("propagator id now is : " + propagatorId)
  //propagatorid->plantid
  get(child(db, `Propagator_Details/${propagatorId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    plantId = snapshot.val().plantId
    console.log("plantId+ "+plantId);
  } else {
    console.log("No plant data available");
  }
  })
  //get readings
get(child(db, `Temperature_Readings/01`)).then((snapshot) => {
  if (snapshot.exists()) {
    var degree = snapshot.val().reading
    console.log("temperature reading "+ degree);
  } else {
    console.log("No temperature data available");
  }
  })

  get(child(db, `Sunlight_Readings/01`)).then((snapshot) => {
    if (snapshot.exists()) {
      var degree = snapshot.val().reading
      console.log("sunlight reading "+ degree);
    } else {
      console.log("No sunlight data available");
    }
    })

    get(child(db, `Moisture_Readings/01`)).then((snapshot) => {
      if (snapshot.exists()) {
        var degree = snapshot.val().reading
        console.log("moisture reading "+ degree);
      } else {
        console.log("No moisture data available");
      }
      })
}




getAllInfo("01")


// get plant details by plantid
import neo4j from 'neo4j-driver'
(async() => {
const uri = 'neo4j+s://28cce6ce.databases.neo4j.io';
const user = 'neo4j';
const password = 'sdpgroup22isthebest';
 const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
 const session = driver.session()
 try {
   const readQuery = `match (n:Species)
                     where ID(n) = $id
                     return n.name as name`
   const readResult = await session.readTransaction(tx =>
     tx.run(readQuery, { id: 18 })
   )
   readResult.records.forEach(record => {
     console.log(`plant name: ${record.get('name')}`)
   })
 } catch (error) {
   console.error('Something went wrong: ', error)
 } finally {
   await session.close()
 }
 await driver.close()
})();