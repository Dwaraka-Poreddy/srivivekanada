import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { storage } from "../../firebase";
import { v4 as uuidv4 } from "uuid";
import "../../HomePage.css";
import { Carousel } from "react-responsive-carousel";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { Link } from "react-router-dom";
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} color="inherit" />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.inherit">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
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
        .collection("notice_board_JnrClg")
        .doc("notice_board_JnrClg")
        .get();
      setimagesss(snapshot.data().images_array);
    };
    getContent();
  }, [imagesss]);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("notice_board_JnrClg")
        .doc("notice_board_JnrClg")
        .get();
      setpdfsss(snapshot.data().pdfs_array);
    };
    getContent();
  }, [pdfsss]);
  useEffect(() => {
    const getContent = async () => {
      const snapshot = await database
        .collection("notice_board_JnrClg")
        .doc("notice_board_JnrClg")
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
              .collection("notice_board_JnrClg")
              .doc("notice_board_JnrClg")
              .get();
            console.log("namaste", snapshot.data().images_array);
            var daty = snapshot.data().images_array;
            const newdaty = { url, ImgText };
            daty.push(newdaty);
            await database
              .collection("notice_board_JnrClg")
              .doc("notice_board_JnrClg")
              .update(
                {
                  images_array: daty,
                },
                { merge: true }
              );
          });
      }
    );
    setimgProgress(0);
    document.getElementById("ImageUpload").reset();
  };
  const HandleTextUpload = async (e) => {
    e.preventDefault();
    const snapshot = await database
      .collection("notice_board_JnrClg")
      .doc("notice_board_JnrClg")
      .get();
    console.log("namaste", snapshot.data().texts_array);
    var daty = snapshot.data().texts_array;
    daty.push(newText);
    await database
      .collection("notice_board_JnrClg")
      .doc("notice_board_JnrClg")
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
              .collection("notice_board_JnrClg")
              .doc("notice_board_JnrClg")
              .get();
            console.log("namaste", snapshot.data().pdfs_array);
            var daty = snapshot.data().pdfs_array;
            daty.push(url);
            await database
              .collection("notice_board_JnrClg")
              .doc("notice_board_JnrClg")
              .update(
                {
                  pdfs_array: daty,
                },
                { merge: true }
              );
          });
      }
    );
    setpdfProgress(0);
    document.getElementById("PdfUpload").reset();
  };
  const HandledeleteImage = async (id) => {
    const snapshot = await database
      .collection("notice_board_JnrClg")
      .doc("notice_board_JnrClg")
      .get();
    var daty = snapshot.data().images_array;
    console.log("beforedelete", daty);
    console.log("inside del function id: ", id);

    daty.splice(id, 1);
    console.log("afterdelete", daty);

    await database
      .collection("notice_board_JnrClg")
      .doc("notice_board_JnrClg")
      .update(
        {
          images_array: daty,
        },
        { merge: true }
      );
  };
  const HandledeletePdf = async (id) => {
    const snapshot = await database
      .collection("notice_board_JnrClg")
      .doc("notice_board_JnrClg")
      .get();
    var daty = snapshot.data().pdfs_array;
    console.log("beforedelete", daty);
    daty.splice(id, 1);
    console.log("afterdelete", daty);

    await database
      .collection("notice_board_JnrClg")
      .doc("notice_board_JnrClg")
      .update(
        {
          pdfs_array: daty,
        },
        { merge: true }
      );
  };
  return (
    <div className="App text-dark">
      <header className="App-header text-dark">
        <div className="mt-4 p-5 banner_radient text-dark rounded container">
          <h3 className="bg-secondary p-3">Junior College Notice Board</h3>
          <div className="row">
            <div className="col-md-4 ">
              <Link className="text-decoration-none" to="/notice_board_school">
                <h1 className="text-dark">School</h1>
                <img
                  className="img-fluid"
                  src="https://www.voicesofyouth.org/sites/voy/files/images/2019-03/school.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-4 bg-success">
              <Link className="text-decoration-none" to="/notice_board_jnrClg">
                <h1 className="text-dark">Junior College</h1>
                <img
                  className="img-fluid"
                  src="https://www.top10onlinecolleges.org/wp-content/uploads/2020/08/What-is-Junior-College.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-4">
              <Link
                className="text-decoration-none"
                to="/notice_board_degreeClg"
              >
                <h1 className="text-dark">Degree College</h1>
                <img
                  className="img-fluid"
                  src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Degree_College_poster.jpg?itok=555ZicL6"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mx-auto imgCarousel text-dark"
          style={{ width: "50vw" }}
        >
          <Carousel
            autoPlay
            showArrows={true}
            centerSlidePercentage={60}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
          >
            {imagesss.map((imag, id) => {
              return (
                <div>
                  <img src={imag.url} alt="" />
                  <div className="legend">
                    {" "}
                    <h5
                      style={{
                        fontSize: "25px",
                        margin: "5px",
                        display: "inline",
                      }}
                    >
                      {imag.ImgText}
                    </h5>{" "}
                    <span
                      style={{
                        position: "absolute",
                        left: "3px",
                        top: "15px",
                      }}
                    >
                      <span
                        onClick={() =>
                          window.location.replace("/#imageuploadform")
                        }
                        className="ImgDownloadIconspan"
                      >
                        <AddPhotoAlternateIcon className="ImgDownloadIcon" />
                      </span>
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        right: "3px",
                        top: "15px",
                      }}
                    >
                      <span className="ImgDeleteIconspan">
                        <DeleteOutlineIcon
                          className="ImgDeleteIcon"
                          onClick={() => {
                            HandledeleteImage(id);
                          }}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="row container mx-auto" id="imageuploadform">
          <div className="my-5 col-lg-6 imageuploadformform  ">
            <h5 className="mb-5">Add Images</h5>
            <form onSubmit={HandleImageUpload} id="ImageUpload">
              <input
                className="imgFormInput imgFormFileInput mb-4 mx-auto"
                type="file"
                accept="image/*"
                onClick={(event) => {
                  event.target.value = null;
                }}
                required
              />
              <input
                className="imgFormInput mb-4 mx-auto"
                type="text"
                onChange={(e) => setImgText(e.target.value)}
                placeholder="Add your Text"
                required
              />
              <button className="imgFormBtn" type="submit">
                Upload Image
              </button>{" "}
              <span style={{ padding: "30px", verticalAlign: "middle" }}>
                <CircularProgressWithLabel value={imgProgress} />
              </span>
            </form>
          </div>
          <div className="my-5 col-lg-6 imageuploadformform  ">
            <h5 className="mb-5">PDFs</h5>
            <form onSubmit={HandlePdfUpload} id="PdfUpload">
              <input
                className="imgFormInput imgFormFileInput mb-4 mx-auto"
                type="file"
                accept="application/pdf,application/vnd.ms-excel"
                onClick={(event) => {
                  event.target.value = null;
                }}
                required
              />
              <button className="imgFormBtn" type="submit">
                Upload PDF
              </button>
              <span style={{ padding: "30px", verticalAlign: "middle" }}>
                <CircularProgressWithLabel value={pdfProgress} />
              </span>
            </form>
          </div>
        </div>

        <br />

        <Container className="imageuploadformform mt-5">
          <Row md={2} lg={3} xl={4}>
            {pdfsss.map((pdif, id) => {
              return (
                <Col className="pdfDisplayClass">
                  <span className="pdfDisplayClassElement">
                    <span style={{ padding: "10px" }}>
                      <PictureAsPdfIcon />
                      {pdif
                        .slice(123)
                        .split("?")[0]
                        .replaceAll("%", "_")
                        .slice(0, 17)}
                    </span>
                    <span className="IconsSpan">
                      <a
                        target="_blank"
                        rel="noreferrer noopener "
                        href={pdif}
                        download={pdif}
                        rel="noopener"
                        // class="btn btn-primary"
                        role="button"
                      >
                        <span className="DownloadIconspan">
                          <FileDownloadIcon className="DownloadIcon" />
                        </span>
                      </a>
                      <span className="DeleteIconspan">
                        <DeleteOutlineIcon
                          className="DeleteIcon"
                          onClick={() => {
                            HandledeletePdf(id);
                          }}
                        />
                      </span>
                    </span>
                  </span>
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="imageuploadformform my-5 container">
          <h5>Text</h5>
          <form onSubmit={HandleTextUpload}>
            <input
              className="imgFormInput imgFormFileInput  mx-auto"
              type="text"
              placeholder="Enter some text here"
              onChange={(e) => setNewText(e.target.value)}
            />
            <button className="imgFormBtn" type="submit">
              Upload Text
            </button>
          </form>
        </div>
      </header>

      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
