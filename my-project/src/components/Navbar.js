import react from "react";


const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">CSCE-3444-DR34MT34M</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Menu <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Games</a>
      </li>
      
      <li className="nav-item active">
        <a className="nav-link" href="#">Request Assistance</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar
