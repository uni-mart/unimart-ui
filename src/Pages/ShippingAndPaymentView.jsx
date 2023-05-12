import React from 'react';
import { Container, Row, Col, Button, Image, Form } from 'react-bootstrap';
const ShippingAndPaymentView = () => {
  return (
    <Container fluid>
    <br/>
      <Row className='container m-auto'>
      
        {/* Left column */}
        <Col md={8}>
          {/* Navigation */}
          <nav className="mb-3">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Cart</a></li>
              <li className="breadcrumb-item"><a href="#">Information</a></li>
              <li className="breadcrumb-item active">Shipping</li>
              <li className="breadcrumb-item"><a href="#">Payment</a></li>
              <li className="breadcrumb-item"><a href="#">Review</a></li>
            </ol>
          </nav>

          {/* Express Checkout */}
          <div className="mb-3">
            <h4>Express Checkout</h4>
            <Button variant="outline-primary">Checkout with Express</Button>
          </div>

          {/* Payment options */}
          <div className="mb-3 border-bottom">
  <h4>Payment</h4>
  <Row>
    <Col>
      <Button variant="outline-light" className="p-3">
        <Image src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/pp-acceptance-small.png" height={50} className="mr-2" />
        &nbsp;PayPal
      </Button>
    </Col>
    <Col>
      <Button variant="outline-light" className="p-3">
        <Image src="https://banner2.cleanpng.com/20190724/cyo/kisspng-apple-pay-iphone-5-apple-wallet-ios-przez-apple-pay-zapacisz-ju-rachunki-za-prd-5d3872341f42e9.1130964415639803401281.jpg" height={50} className="mr-2" />
        &nbsp;Apple Pay
      </Button>
    </Col>
    <Col>
      <Button variant="outline-light" className="p-3">
        <Image src="https://pixlok.com/wp-content/uploads/2021/04/google-pay-Logo-PNG-768x768.jpg" height={50} className="mr-2" />
        &nbsp;Google Pay
      </Button>
    </Col>
  </Row>
</div>

          {/* Delivery Method */}
          <div className="mb-3">
            <h4>Delivery Method</h4>
            <p>OR</p>
            <h5 className="font-weight-bold">Shipping</h5>
            <Button variant="outline-light" className="d-block mb-3 p-3">
            <i className="fas fa-truck mr-2"></i>
            &nbsp;Ship with truck 
            </Button>
            <Button variant="outline-light" className="d-block mb-3 p-3">
            <i className="fas fa-box mr-2"></i>
            &nbsp;Pickup with box 
            </Button>
          </div>


          

          {/* Shipping Address */}
          <div className="mb-3">
            <h4>Shipping Address</h4>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" />
            </Form.Group>  
            <Form.Group>
              <Form.Label>Apartment, Suite,</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
             
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Postcode</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" />
            </Form.Group>
          </div>

          {/* Return to Cart and Continue to Ship buttons */}
          <div className="d-flex justify-content-between">
                <Button variant="link">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                &nbsp;Return to Cart
                </Button>
                <Button variant="primary">Continue to Ship</Button>
                </div>
                <br/>

        </Col>

        {/* Right column */}
        <Col md={4} className="bg-light">
  {/* Product summary */}
  <div className="mb-3">
    <h4>Product Summary</h4>
    {/* Replace with actual product information */}
    <div className="d-flex mb-3">
      <Image src="https://w7.pngwing.com/pngs/58/976/png-transparent-robert-kiyosaki-rich-dad-poor-dad-what-the-rich-teach-their-kids-about-money-that-the-poor-and-the-middle-class-do-not-mass-market-paperback-others-text-poster-banner-thumbnail.png" width={50} className="mr-3" />
      <div>
        <div>Product name</div>
        <div>Quantity: 1</div>
        <div>Price: £10</div>
      </div>
    </div>
    <div className="border-top border-bottom py-3">
      <div className="d-flex justify-content-between">
        <div>Subtotal</div>
        <div>£10</div>
      </div>
      <div className="d-flex justify-content-between">
        <div>Shipping</div>
        <div>Calculated at next step</div>
      </div>
    </div>
    <div className="d-flex justify-content-between py-3">
      <div>Total</div>
      <div>£10</div>
    </div>
  </div>
</Col>


      </Row>
    </Container>
  );
};

export default ShippingAndPaymentView;
