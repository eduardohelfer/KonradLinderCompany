import React from 'react';
import './css/Cards.css';
import { Button, Card, CardText, CardTitle, Container, Col, Row } from 'reactstrap';

function CardLeft() {
  return (
    <>
      <div id="cards" className='cards' >
        <Container style={{margin: "1rem auto"}}>  
          <Row  className='card-row'>
            <Col sm='5' 
              style={{overflowX: 'hidden', display: 'flex', justifyContent: 'center'}}
            >
              <img
                alt="Card"
                src="https://picsum.photos/400/400"
                style={{overflowX: 'hidden', objectFit: 'contain', borderRadius: "10px"}}    
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
      </div>
    </>
  );
}

export default CardLeft;
