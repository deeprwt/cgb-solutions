const nodemailer = require("nodemailer");

// Import the Firebase SDK
const firebase = require("firebase/app");
require("firebase/database");

// Initialize Firebase with your project config
const firebaseConfig = {
  apiKey: "AIzaSyCrlIjfIrgmqZT3CNl_SwuS3qZzAkQVbHA",
  authDomain: "cgbformdata.firebaseapp.com",
  projectId: "cgbformdata",
  storageBucket: "cgbformdata.appspot.com",
  messagingSenderId: "447466504672",
  appId: "1:447466504672:web:a47375f33a5b3ee493ab85",
  measurementId: "G-7BEQNWNL7P",
};

firebase.initializeApp(firebaseConfig);

// Reference to your database
const database = firebase.database();

// Function to get data from Firebase
function getDataFromFirebase() {
  // Reference to the node you want to get data from
  const ref = database.ref("/newcontact");
  // Fetch data once from the specified location
  ref.once(
    "value",
    (snapshot) => {
      // Get the data from the snapshot
      const data = snapshot.val();
      console.log(data);
    },
    (errorObject) => {
      console.error("The read failed: " + errorObject.code);
    }
  );
}

// Call the function to get data
getDataFromFirebase();
async function sendMail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      address: "smtp.gmail.com",
      user: "deeprawat1511@gmail.com",
      pass: "dxsrwlpkwkfgsatz",
      secure: true,
      domain: "gmail.com",
      enable_starttls_auto: true,
    },
  });

  const mailOptions = {
    from: "deeprawat1511@gmail.com",
    to: "manishchandr349@gmail.com",
    subject: "New clint",
    text: `New message from client: ${clientName}`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Eamil sent Successfully");
  } catch (error) {
    console.log("Email send failed with error:", error);
  } 
}

// async function main() {
//   try {
//     const data = await getDataFromFirebase();
//     const clientName = data ? data.clientName : 'Unknown'; // Assuming your data contains a 'clientName' field
//     await sendMail(clientName);
//   } catch (error) {
//     console.error('Error occurred:', error);
//   }
// }

main();
sendMail();
