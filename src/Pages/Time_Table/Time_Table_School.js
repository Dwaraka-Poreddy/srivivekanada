import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
function App() {
  const database = firebase.firestore();
  const [imgProgress, setimgProgress] = useState(0);
  const [pdfProgress, setpdfProgress] = useState(0);
  const [ImgText, setImgText] = useState("");
  const [newText, setNewText] = useState("");
  const [imagesss, setimagesss] = useState([]);
  const [pdfsss, setpdfsss] = useState([]);
  const [textsss, settextsss] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("Time_Table_School")
        .doc("Time_Table_School")
        .get();
      setimagesss(snapshot.data().images_array);
      setpdfsss(snapshot.data().pdfs_array);
      settextsss(snapshot.data().texts_array);
    };
    getContent();
  }, [imagesss]);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("Time_Table_School")
        .doc("Time_Table_School")
        .get();
      setpdfsss(snapshot.data().pdfs_array);
    };
    getContent();
  }, [pdfsss]);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("Time_Table_School")
        .doc("Time_Table_School")
        .get();

      settextsss(snapshot.data().texts_array);
    };
    getContent();
  }, [textsss]);
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
        setimgProgress(prog);
      },
      (err) => console.log(err),
      async () => {
        await storage
          .ref(`/images/${ud + file.name}`)
          .getDownloadURL()
          .then(async (url) => {
            const snapshot = await database
              .collection("Time_Table_School")
              .doc("Time_Table_School")
              .get();
            console.log("namaste", snapshot.data().images_array);
            var daty = snapshot.data().images_array;
            const newdaty = { url, ImgText };
            daty.push(newdaty);
            await database
              .collection("Time_Table_School")
              .doc("Time_Table_School")
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
      .collection("Time_Table_School")
      .doc("Time_Table_School")
      .get();
    console.log("namaste", snapshot.data().texts_array);
    var daty = snapshot.data().texts_array;
    daty.push(newText);
    await database
      .collection("Time_Table_School")
      .doc("Time_Table_School")
      .update(
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
        setpdfProgress(prog);
      },
      (err) => console.log(err),
      async () => {
        await storage
          .ref(`/pdfs/${ud + file.name}`)
          .getDownloadURL()
          .then(async (url) => {
            const snapshot = await database
              .collection("Time_Table_School")
              .doc("Time_Table_School")
              .get();
            console.log("namaste", snapshot.data().pdfs_array);
            var daty = snapshot.data().pdfs_array;
            daty.push(url);
            await database
              .collection("Time_Table_School")
              .doc("Time_Table_School")
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
  const HandledeleteImage = async (id) => {
    const snapshot = await database
      .collection("Time_Table_School")
      .doc("Time_Table_School")
      .get();
    var daty = snapshot.data().images_array;
    console.log("beforedelete", daty);
    daty.splice(daty.indexOf(id), 1);
    console.log("afterdelete", daty);

    await database
      .collection("Time_Table_School")
      .doc("Time_Table_School")
      .update(
        {
          images_array: daty,
        },
        { merge: true }
      );
  };
  const HandledeletePdf = async (id) => {
    const snapshot = await database
      .collection("Time_Table_School")
      .doc("Time_Table_School")
      .get();
    var daty = snapshot.data().pdfs_array;
    console.log("beforedelete", daty);
    daty.splice(daty.indexOf(id), 1);
    console.log("afterdelete", daty);

    await database
      .collection("Time_Table_School")
      .doc("Time_Table_School")
      .update(
        {
          pdfs_array: daty,
        },
        { merge: true }
      );
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Notice Board : SCHOOL</h1>
        <h1>Images</h1>
        <form onSubmit={HandleImageUpload}>
          <input
            type="file"
            accept="image/*"
            onClick={(event) => {
              event.target.value = null;
            }}
          />
          <input type="text" onChange={(e) => setImgText(e.target.value)} />
          <button type="submit">upload</button>
        </form>
        <h3>{imgProgress}</h3>
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
          <h3>{pdfProgress}</h3>
        </form>

        <div>
          {imagesss.map((imag, id) => {
            return (
              <>
                <img src={imag.url} style={{ width: "50px" }} alt="" />
                <h5 style={{ margin: "0" }}>{imag.ImgText}</h5>
                <button
                  onClick={() => {
                    HandledeleteImage(imag.id);
                  }}
                >
                  delete
                </button>
                <br />
                <br />
                <br />
              </>
            );
          })}
        </div>
        <br />
        <div>
          {pdfsss.map((pdif, id) => {
            return (
              <>
                <embed src={pdif} width="50px" height="50px" />
                <button
                  onClick={() => {
                    HandledeletePdf(pdif.id);
                  }}
                >
                  delete
                </button>
              </>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
