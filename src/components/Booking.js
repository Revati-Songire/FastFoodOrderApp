import React from 'react'
import { Col, Container, Row, Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Booking() {
  return (
    <div>
      <Container className='mt-5'>
        <h1 className='text-start' style={{fontFamily:"brush script mt"}}>Book A Table</h1>
        <Row>
          <Col>
            <Form className='mt-4'>
              <Form.Group controlId='exampleForm.ControlInput1' className='mb-4'>
                <Form.Control type='text' placeholder='Your Name'/>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlInput1' className='mb-4'>
                <Form.Control type='text' placeholder='Phone Number'/>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlInput1' className='mb-4'>
                <Form.Control type='email' placeholder='Your Email'/>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlInput1' className='mb-4'>
                <Form.Control as='select'>
                  <option>How many persons?</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlInput1' className='mb-4'>
                <Form.Control type='date'/>
              </Form.Group>
              <Button variant="warning" className='text-white fs-5 px-4 rounded-pill mt-4 float-start btn-lg'>Book Now</Button>
            </Form>
          </Col>
          <Col>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.275065971361!2d73.83966897501304!3d18.5164679825762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c077fb3b7107%3A0x971d551b0ffecc71!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1711084734526!5m2!1sen!2sin" width="600" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded-3'></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Booking