import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown,
} from 'reactstrap';
import menuData from './Menu.data.json';

const MenuStrap = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const MenuItem = ({title, link, submenu}) => {

    const SubMenuItem = ({subtitle, sublink, subsubmenu}) => {
      if(subsubmenu){

        const [dropdownOpen, setDropdownOpen] = useState(false);
        const toggle = () => setDropdownOpen((prevState) => !prevState);

        return(
          <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="end">
            <DropdownToggle caret>
              {subtitle}
            </DropdownToggle>
            <DropdownMenu color="dark" dark >
              {
                subsubmenu.map((subitem)=>(
                  <SubMenuItem key={subitem.title} subtitle={subitem.title} sublink={subitem.link} />
                ))
              }  
            </DropdownMenu>
          </Dropdown>

        )
      } else {
        return(
          <DropdownItem href={sublink}>
            {subtitle}
          </DropdownItem>
        )
      }
    }

    if(submenu){
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {title}
          </DropdownToggle>
          <DropdownMenu end dark>
            {
              submenu.map((item)=>(
                <SubMenuItem key={item.title} subtitle={item.title} sublink={item.link} subsubmenu={item.submenu} />
              ))
            }            
          </DropdownMenu>
        </UncontrolledDropdown>
      )
    }
    else {
      return(
        <NavItem>
          <NavLink href={link}>{title}</NavLink>
        </NavItem>       
      )
    }
  }
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
        <div>
      <Navbar color="dark" dark expand="md" container="fluid" fixed="top">
        <NavbarBrand href="/">Konrad Linder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {
              menuData.menu.map((item)=>(
                <MenuItem key={item.title} title={item.title} link={item.link} submenu={item.submenu} />
              ))
            }
          </Nav>
          <NavbarText>{day}-{month}-{year}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default MenuStrap
