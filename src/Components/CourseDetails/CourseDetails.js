import React from 'react';
import { Card, Button, CardDeck, Col } from 'react-bootstrap';
import './CourseDetails.css';

const CourseDetails = (props) => {
    const {name, description, teacher, price, image} = props.course;
    const imageStyle ={
        height:'200px'
    }
    return (
        <Col md={4}>
            <CardDeck>
                <Card style={{marginBottom:'10px'}} variant='Primary'>
                    <Card.Img style={imageStyle} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text><strong>description:</strong> {description}</Card.Text>
                        <Card.Text><strong>Teacher:</strong> {teacher}</Card.Text>
                        <Card.Text><strong>course fee:</strong> ${price}</Card.Text>
                    </Card.Body>            
                    <Button onClick={()=>props.eventListener(props.course)}>Buy</Button>
                </Card>
            </CardDeck>
        </Col>
    );
};

export default CourseDetails;