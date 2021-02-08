import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar"
import MyCard from "./components/Card"
import {
  Container,
  Row,
  Column,
  Button,
  Alert,
  Breadcrumb,
  Form,
  Nav,
} from "react-bootstrap";

function App() {
  return (
    <>
    <NavBar/>
    <MyCard/>
    </>
  )
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
