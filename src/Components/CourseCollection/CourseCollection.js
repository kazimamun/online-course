import React, { useState } from 'react';
import './CourseCollection.css';
import courses from '../../data/course-details.json';
import CourseDetails from '../CourseDetails/CourseDetails';
import { Container, Row, Col } from 'react-bootstrap';
import Cart from '../Cart/Cart';


const CourseCollection = () => {
    const [cart, setCart] = useState([]);
    const btnEvent = (course)=>{
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return ( 
        <Container style={{display: 'flex'}}>
            <Row style={{width: '170%'}}>
                {
                    courses.map(course =><CourseDetails 
                                            key={course.id} 
                                            course={course}
                                            eventListener ={btnEvent}
                                        > </CourseDetails>)
                }
            </Row>
            <Row style={{width: '30%'}}>
                <Col md={12}>
                    <Cart cart={cart} />
                </Col>
            </Row>
        </Container>         
    );
};

export default CourseCollection;