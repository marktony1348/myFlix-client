// import React from 'react'

// import { Navbar, Container, Nav, Button }from 'react-bootstrap';

// import { Navbar } from './navbar-view/navbar-view';

// // import './navbar-view.scss'

// export function NavbarView ({user}) {

//     // const onLoggedIn = (authData) => {
//     //     console.log(authData);
//     //     this.setState({
//     //         user: authData.user.Username
//     //     });

//     //     localStorage.setItem('token', authData.token);
//     //     localStorage.setItem('user', authData.user.Username);
//     //     this.getMovies(authData.token);
//     // };

//   const onLoggedOut = () => {
//       localStorage.clear();
//       window.open("/", "_self");
//     };

//   const isAuth = () => {
//     if(typeof window == "undefined") {
//       return false;
//     }
//     if (localStorage.getItem("token")) {
//       return localStorage.getItem("token");
//     } else {
//       return false;
//     }
//   };

//   return (
//         <Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
//         <Container>
//             <Navbar.Brand className="navbar-logo" href="/">myFlixCineverse</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ml-auto">
//                 {isAuth() && (
//                 <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>
//                 )}
//                 {isAuth() && (
//                 <Button variant="link" onClick={() => { this.onLoggedOut() }}>Logout</Button>
//                 )}
//                 {!isAuth() && (
//                 <Nav.Link href="/">Sign-in</Nav.Link> 
//                 )}
//                 {!isAuth() && (
//                 <Nav.Link href="/register">Sign-up</Nav.Link> 
//                 )}
//             </Nav>
//             </Navbar.Collapse>
//         </Container>
//         </Navbar>
//     );
// }
