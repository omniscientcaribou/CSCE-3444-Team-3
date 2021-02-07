import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Container,
  Row,
  Column,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg" />
    </div>
  );
}

export default App;
{
  /* <Card.Img src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg" /> */
}

// <div class="card w-50" id="main-card">
// <div class="card-img-top d-flex align-items-center bg-dark">
//   <div>
//     <img
//       class="img-fluid"
//       src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg"
//       alt="Card image cap"
//     />
//   </div>

//   <div
//     class="btn-group-vertical"
//     role="group"
//     aria-label="Basic example"
//   >
//     <a href="www.google.com" class="btn btn-primary" role="button">
//       Order Food
//     </a>
//     <a href="www.google.com" class="btn btn-secondary" role="button">
//       Play Games
//     </a>
//     <a href="www.google.com" class="btn btn-warning" role="button">
//       Request Assistance
//     </a>
//   </div>
// </div>

// <div class="card-body bg-dark text-white">
//   <h5 class="card-title">CSCE 3444 - DR34M T34M</h5>
// </div>
// </div>

// <link
// href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
// rel="stylesheet"
// />
