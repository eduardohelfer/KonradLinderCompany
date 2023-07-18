import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button, Card, CardText, CardTitle, Container, Col, Row } from 'reactstrap';

function Cards() {
  return (
    <>
      <div className='cards' >
        <Container style={{margin: "4rem auto"}}>  
          <Row  className='card-row'>
            <Col sm='5' 
              style={{overflowX: 'hidden', display: 'flex', justifyContent: 'center', objectFit: "contain"}}
            >
              <img
                alt="Card"
                src="https://picsum.photos/400/400"
                style={{overflowX: 'hidden', objectFit: 'contain'}}    
              />
            </Col>
            <Col sm='7' style={{paddingLeft: "2rem"}}>
              <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text wew abes estega seg ewaw below as a natural lead-in to additional content ates vowhel sop.
              </CardText>
              <Button>
                Go somewhere
              </Button>
            </Col>
          </Row>
        </Container>
        <Container style={{margin: "4rem auto"}}>  
          <Row  className='card-row'>
            <Col sm='7' style={{paddingLeft: "2rem"}}>
              <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text wew abes estega seg ewaw below as a natural lead-in to additional content ates vowhel sop.
              </CardText>
              <Button>
                Go somewhere
              </Button>
            </Col>
            <Col sm='5' 
              style={{overflowX: 'hidden', display: 'flex', justifyContent: 'center', objectFit: "contain"}}>
                <img
                  alt="Card"
                  src="https://picsum.photos/500/400"
                  style={{overflowX: 'hidden', objectFit: 'contain'}}    
                />
            </Col>          
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Cards;
