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

import { getDatabase, ref, set,get,child,orderByChild,equalTo,query,push,limitToLast} from "firebase/database";
import neo4j from 'neo4j-driver'


function addUserPropagatorRelations(userId, propagatorId) {
  const db = getDatabase();
  set(ref(db, 'User_Propagator_relations/' + userId), {
    "propagatorId" : propagatorId
  });
}

// function addPropagatorDetails( propagatorId,plantId,soilType) {
//   const db = getDatabase();
//   set(ref(db, 'Propagator_Details/' + propagatorId), {
//     plantId:plantId,
//     soilType:soilType
//   });
// }


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


//get relevant information in firebase by userid
const db = ref(getDatabase());
const uri = 'neo4j+s://28cce6ce.databases.neo4j.io';
    const user = 'neo4j';
    const password = 'sdpgroup22isthebest';
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    const session = driver.session()

function getAllInfo(userId) {
  console.log("user id: " + userId)
  // get propagator id from user id 
  get(child(db, `User_Propagator_relations/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    var propagatorId = snapshot.val().propagatorId
    console.log("propagatorid: "+ propagatorId);
  } else {
    console.log("No propagator data available");
  }
  return propagatorId
  }).then(propagatorId => Promise.all([
    //get plant id through propagator id
    get(child(db, `Propagator_Details/${propagatorId}`)).then((propagatorId)=>{
      if (propagatorId.exists()) {
        var plantId = propagatorId.val().plantId
        console.log("plantId: "+plantId);
      } else {
        console.log("No plant data available");
      }
      return `match (n:Species) -[:In]-> (p) -[:In]->(l) -[:In] ->(z) -[:In]->(k) -[:In]->(q) 
      where ID(n) = 18
      return n.name as plant,p.name as a,l.name as b,z.name as c ,k.name as d,q.name as e`
      }
    ).then((auraquery) => {
      try {
       const readResult = session.readTransaction(tx =>
         tx.run(auraquery)
       )
       return readResult
       } catch (error) {
       console.error('Something went wrong: ', error)
     } 
  
    }).then((readResult)=>{
      readResult.records.forEach(record => {
        //get all plant information from plant id
        var plantName = record.get('plant')
        console.log(`plant name: ${record.get('plant')}`)
        console.log(`in: ${record.get('a')}`)
        console.log(`in: ${record.get('b')}`)
        console.log(`in: ${record.get('c')}`)
        console.log(`in: ${record.get('d')}`)
        console.log(`in: ${record.get('e')}`)
      })
    }),
    //get latest humidity and temperature reading
    get(child(db, `Humidity_Temperature_Readings/${propagatorId}`)).then((ans)=>{
      if (ans.exists()) {
        var humidity = Object.values(ans.val()).slice(-1)[0].Humidity
        var temperature = Object.values(ans.val()).slice(-1)[0].Temperature
          console.log("humidity: "+ Object.values(ans.val()).slice(-1)[0].Humidity)
          console.log("temperature: " + Object.values(ans.val()).slice(-1)[0].Temperature)
      } else {
        console.log("No humidity temperature data available");
      }
      })
      ,
      //get latest light reading
      get(child(db, `Light_Reading/${propagatorId}`)).then((ans)=>{
        if (ans.exists()) {
          var lightintensity = Object.values(ans.val()).slice(-1)[0].intensity
            console.log("light intensity: "+Object.values(ans.val()).slice(-1)[0].intensity)
            // .forEach((haha) => console.log(haha.Humidity))
        } else {
          console.log("No light data available");
        }
        }),
        //get latest moisture reading
        get(child(db, `Moisture_Readings/${propagatorId}`)).then((ans)=>{
          if (ans.exists()) {
            var moisturevalue = Object.values(ans.val()).slice(-1)[0].Moisture_value
            var moisturestatus = Object.values(ans.val()).slice(-1)[0].Status
              console.log("moisture value: "+Object.values(ans.val()).slice(-1)[0].Moisture_value)
              console.log("moisture status: "+Object.values(ans.val()).slice(-1)[0].Status)
          } else {
            console.log("No moisture data available");
          }
          })

  ]))
}

getAllInfo("01")
 
















//Search engine
const session2 = driver.session()
function search(word) {
  try {
    //step1: searching the plant name by its common name or (professional) name
    //step2:retrun all plant details (later will also with propogator conditions as it establlished manaully)
    //eg: when we search tomato, it would return all the palnts which has the common/professional name called tomato with their all relevant information

    const readQuery = `match (n:Species)-[:In]-> (p) -[:In]->(l) -[:In] ->(z) -[:In]->(k) -[:In]->(q) 
                    where n.common = $search or n.name = $search
                     return n.name as plant,n.common as common, n.information as info,p.name as a,l.name as b,z.name as c ,k.name as d,q.name as e`
     session2.readTransaction((tx) =>
      tx.run(readQuery ,{search :word}).then((readResult)=>{
        readResult.records.forEach(record => {
          console.log(`plant name: ${record.get('plant')}`)
          console.log(`in: ${record.get('a')}`)
          console.log(`is: ${record.get('common')}`)
          console.log(`with: ${record.get('info')}`)
          console.log(`in: ${record.get('b')}`)
          console.log(`in: ${record.get('c')}`)
          console.log(`in: ${record.get('d')}`)
          console.log(`in: ${record.get('e')}`)
        })
      })
    );
  } catch (error) {
    console.error("Something went wrong: ", error);
  } 
}
search("Tomato")

//step3 :user select one plant and add it to his/her propogator (connect the propogator id and plant id)
function addPropagatorDetails( propagatorId,plantId) {
  const db = getDatabase();
  set(ref(db, 'Propagator_Details/' + propagatorId), {
    plantId:plantId,
  });
}