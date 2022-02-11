import React, { useState } from "react";
import firebase from "./firebase";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
function App() {
  const database = firebase.firestore();
  const [progress, setProgress] = useState(0);
  const [newText, setNewText] = useState("");
  const HandleImageUpload = async (e) => {
    var ud = uuidv4();
    console.log(ud);
    e.preventDefault();
    const file = e.target[0].files[0];

    const uploadTask = storage.ref(`/images/${ud + file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      async () => {
        await storage
          .ref(`/images/${ud + file.name}`)
          .getDownloadURL()
          .then(async (url) => {
            const snapshot = await database
              .collection("notice_board")
              .doc("notice_board")
              .get();
            console.log("namaste", snapshot.data().images_array);
            var daty = snapshot.data().images_array;
            daty.push(url);
            await database
              .collection("notice_board")
              .doc("notice_board")
              .update(
                {
                  images_array: daty,
                },
                { merge: true }
              );
          });
      }
    );
  };
  const HandleTextUpload = async (e) => {
    e.preventDefault();
    const snapshot = await database
      .collection("notice_board")
      .doc("notice_board")
      .get();
    console.log("namaste", snapshot.data().texts_array);
    var daty = snapshot.data().texts_array;
    daty.push(newText);
    await database.collection("notice_board").doc("notice_board").update(
      {
        texts_array: daty,
      },
      { merge: true }
    );
  };

  const HandlePdfUpload = async (e) => {
    var ud = uuidv4();
    console.log(ud);
    e.preventDefault();
    const file = e.target[0].files[0];

    const uploadTask = storage.ref(`/pdfs/${ud + file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      async () => {
        await storage
          .ref(`/pdfs/${ud + file.name}`)
          .getDownloadURL()
          .then(async (url) => {
            const snapshot = await database
              .collection("notice_board")
              .doc("notice_board")
              .get();
            console.log("namaste", snapshot.data().pdfs_array);
            var daty = snapshot.data().pdfs_array;
            daty.push(url);
            await database
              .collection("notice_board")
              .doc("notice_board")
              .update(
                {
                  pdfs_array: daty,
                },
                { merge: true }
              );
          });
      }
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Images</h1>
        <form onSubmit={HandleImageUpload}>
          <input
            type="file"
            accept="image/*"
            onClick={(event) => {
              event.target.value = null;
            }}
          />
          <button type="submit">upload</button>
        </form>
        <h3>{progress}</h3>
        <hr />
        <h1>Text</h1>
        <form onSubmit={HandleTextUpload}>
          <input type="text" onChange={(e) => setNewText(e.target.value)} />
          <button type="submit">upload</button>
        </form>
        <hr />
        <h1>PDFs</h1>
        <form onSubmit={HandlePdfUpload}>
          <input
            type="file"
            accept="application/pdf,application/vnd.ms-excel"
            onClick={(event) => {
              event.target.value = null;
            }}
          />
          <button type="submit">upload</button>
        </form>
      </header>
    </div>
  );
}

export default App;
