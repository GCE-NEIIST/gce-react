import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png';
import './NavigationBar.css';


function NavigationBar() {
  return (
    <Navbar className="our-nav" bg="ligth" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="GCE logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#1">ARTIGOS & ENTREVISTAS</Nav.Link>
          <Nav.Link href="#2">GCE THESIS</Nav.Link>
        </Nav>
        <LoginControl></LoginControl>
      </Navbar.Collapse>
    </Navbar>
  );
}



function LoginButton(props) {
  return (
    <div className="our-nav" onClick={props.onClick}>
      <Nav.Link href="#4">LOGIN</Nav.Link>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <div className="our-nav" onClick={props.onClick}>
      <Nav.Link href="#4">LOGOUT</Nav.Link>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const studentName = props.studentName;
  if (isLoggedIn) {
    return (
      <Nav.Link href="#3">{studentName}</Nav.Link>
    );
  }
  return null;
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, studentName: null };
  }

  handleLoginClick() {
    //TODO ir ao fenix mandar grande login
    this.setState({ isLoggedIn: true, studentName: "ProfJam" });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false, studentName: null });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const studentName = this.state.studentName;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <Nav className="ml-auto">
        <Greeting isLoggedIn={isLoggedIn} studentName={studentName} />
        {button}
      </Nav>
    );
  }
}



export default NavigationBar;