import {initializeApp} from'firebase/app';
// import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js'
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
// const auth = getAuth(firebaseApp);

import { getDatabase, ref, set,get,child } from "firebase/database";

// add data to each table functions
function addUserDetails(userId, name, email,password) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    password:password
  });
}

function addUserPropagatorRelations(userId, propagatorId) {
  const db = getDatabase();
  set(ref(db, 'User_Propagator_relations/' + userId), {
    propagatorId : propagatorId
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
function addPlantDetails(plantId, commonName, speciesName,className, family,genus ) {
  const db = getDatabase();
  set(ref(db, 'Plant_Details/' + plantId), {
    commonName:commonName,
    speciesName:speciesName,
    class:className,
    family:family,
    genus:genus
  });
}
function addPropagatorConditions(plantId, temperature, humidity,watering,light,soilph,soiltype) {
  const db = getDatabase();
  set(ref(db, 'Propagator_Conditions/' + plantId), {
    temperature:temperature,
    humidity:humidity,
    watering:watering,
    light:light,
    soilpH:soilph,
    preferredSoilType:soiltype
  });
}
addUserDetails("02","casey","s1969859@ed.ac.uk","wonttellu")
addUserPropagatorRelations("01","01")
addPropagatorDetails("01","01","clay")
addPropagatorReadings("01","temperature","today","24")
addPlantDetails("01","basil","babe","Angiospermae","famfam","genus")
addPropagatorConditions("01",35,1,1,1,5,"clay")


const dbRef = ref(getDatabase());
//read data 
get(child(dbRef, `users/${"02"}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    alert("hi"+ snapshot.val().name)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});


//connecting neo4j
import neo4j from 'neo4j-driver'
(async() => {
  // import neo4j from 'neo4j-driver'
  // const neo4j = require('neo4j-driver')
  
  const uri = 'neo4j+s://28cce6ce.databases.neo4j.io';
  const user = 'neo4j';
  const password = 'AfqVnvZIATS1iUduDVwoxHcwGzRP-UD7EoVvAluNqgg';
  
  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
  const session = driver.session()
 
  const person1Name = 'Alice'
  const person2Name = 'David'
 
  try {
    // To learn more about the Cypher syntax, see https://neo4j.com/docs/cypher-manual/current/
    // The Reference Card is also a good resource for keywords https://neo4j.com/docs/cypher-refcard/current/
    const writeQuery = `MERGE (p1:Person { name: $person1Name })
                        MERGE (p2:Person { name: $person2Name })
                        MERGE (p1)-[:KNOWS]->(p2)
                        RETURN p1, p2`
 
    // Write transactions allow the driver to handle retries and transient errors
    const writeResult = await session.writeTransaction(tx =>
      tx.run(writeQuery, { person1Name, person2Name })
    )
    writeResult.records.forEach(record => {
      const person1Node = record.get('p1')
      const person2Node = record.get('p2')
      console.log(
        `Created friendship between: ${person1Node.properties.name}, ${person2Node.properties.name}`
      )
    })
 
    const readQuery = `MATCH (p:Person)
                       WHERE p.name = $personName
                       RETURN p.name AS name`
    const readResult = await session.readTransaction(tx =>
      tx.run(readQuery, { personName: person1Name })
    )
    readResult.records.forEach(record => {
      console.log(`Found person: ${record.get('name')}`)
    })
  } catch (error) {
    console.error('Something went wrong: ', error)
  } finally {
    await session.close()
  }
 
  // Don't forget to close the driver connection when you're finished with it
  await driver.close()
 })();