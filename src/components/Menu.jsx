import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import menuData from './Menu.data.json';

import './Menu.css';

const Menu = () => {

  const MenuItem = ({title, link, submenu}) => {
    if(submenu){
      
      return (
        /*<Nav.Link href={link}>{title}</Nav.Link>*/
        <NavDropdown title={title} id="basic-nav-dropdown">
          {
            submenu.map((item)=>(
              <NavDropdown.Item id={item.title} href={item.link}>
                {item.title}
              </NavDropdown.Item>
            ))
          }
        </NavDropdown>
        
      )
    }
    else {
      return(
        <Nav.Link href={link}>{title}</Nav.Link>
      )
    }
  }
  
  return (
    <Navbar expand="md" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Konrad Linder</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
          <Nav
            className="me-auto my-2 my-lg-0"
            /*style={{ maxHeight: '100px' }}*/
            navbarScroll
          > 

            {
              menuData.menu.map((item)=>(
                <MenuItem key={item.title} title={item.title} link={item.link} submenu={item.submenu} />
              ))
            }
                

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu

/*


            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="basic-nav-dropdow">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>





---------------------------------------------------
  const DropItem = ({title, link})=>{
    console.log()
    return (
      <NavDropdown.Item id={title} href={link}>
        {title}
      </NavDropdown.Item>
    )
  }
<DropItem key={item.title} title={item.title} link={item.link} /> 


            {
              menuData.menu.map((item)=>(
                <MenuItem key={item.title} title={item.title} link={item.link} submenu={item.submenu} />
              ))
            }

  const MenuItem = ({title, link, submenu}) => {
    if(submenu){
      
      return (
        <NavDropdown title={title} id="basic-nav-dropdown">
          {
            submenu.map((item)=>{
              <NavDropdown.Item id={title} href={link}>
                {title}
              </NavDropdown.Item>
            })
          }
        </NavDropdown>
      )
    }
    else {
      return(
        <Nav.Link href={link}>{title}</Nav.Link>
      )
    }
  }
*/

