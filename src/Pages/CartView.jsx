import React, { useState } from "react";
import { Container, Row, Col, Table, Form,FormGroup, Button } from "react-bootstrap";

const CartView = () => {
  // Dummy data for products
  const [cart, setCart] = useState([
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        image: "https://dummyimage.com/300x300/000/fff&text=Product+1",
        quantity: 1
        },
        {
        id: 2,
        name: "Product 2",
        price: 20.99,
        image: "https://dummyimage.com/300x300/000/fff&text=Product+2",
        quantity: 2
        },
        {
        id: 3,
        name: "Product 3",
        price: 15.99,
        image: "https://dummyimage.com/300x300/000/fff&text=Product+3",
        quantity: 1
        }
  ]);

  // State for checkbox
  const [isChecked, setIsChecked] = useState(false);
  const itemsInCart = cart.length;


  // Calculate total
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  };

  // Handle quantity change
  const handleQuantityChange = (product, e) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === product.id);
    newCart[index].quantity = e.target.value;
    setCart(newCart);
  };
  //Handle Checkout
  const handleCheckout = () => {
    // Check if there are items in the cart
    if (itemInCart > 0) {
      // Redirect the user to the checkout page
      window.location.href = checkoutUrl;
    } else {
      // Show an error message to the user
      alert("Your cart is empty. Please add items to your cart before checking out.");
    }
  }
  
  // Render the gift checkbox component
function renderGiftCheckbox() {
    const [isChecked, setIsChecked] = useState(false);
    return (
      <FormGroup>
        <h5>Is this a gift?</h5>
        <Form.Check
          type="checkbox"
          id="gift-checkbox"
          label="Yes, please hide any prices on the packing sheet."
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </FormGroup>
    );
  }
  
  // Render the terms checkbox component
  function renderTermsCheckbox() {
    return (
      <FormGroup>
        <h5>Terms and Checkbox</h5>
        <Form.Check
          type="checkbox"
          id="terms-checkbox"
          label="By ticking this box, you agree to our Terms of Service and Privacy Policy."
        />
      </FormGroup>
    );
  }
  
  // Render the subtotal component
  function renderSubtotal() {
    const subtotal = calculateTotal();
    return (
      <div className="d-flex justify-content-end">
        <div className="bg-secondary text-white p-3 rounded">
          Subtotal: ${subtotal}
        </div>
      </div>
    );
  }
  
  // Render the checkout buttons component
  function renderCheckoutButtons() {
    const checkoutUrl = "/checkout";
    return (
        <div className="mt-4 d-flex justify-content-between" style={{ marginTop: 20, backgroundColor: '#f5f5f5', padding: 10 }}>
  <Button variant="secondary" className="mr-2 px-4 py-2" style={{ transition: 'all 0.2s' }}>
    Back to Shopping
  </Button>
  <div className="d-flex align-items-center">
    <span className="mr-2">{itemsInCart} item(s)  </span>
    <Button variant="primary" href={checkoutUrl} onClick={handleCheckout} className="px-4 py-2" style={{ transition: 'all 0.2s' }}>
      Checkout
    </Button>
  </div>
</div>


      
    );
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h2>Shopping Cart</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ height: "50px", marginRight: "10px" }}
                    />
                    {product.name}
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      max="10"
                      value={product.quantity}
                      onChange={(e) => handleQuantityChange(product, e)}
                    />
                  </td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right">
                  Total:
                </td>
                <td>{calculateTotal()}</td>
              </tr>
            </tfoot>
          </Table>
        </Col>
      </Row>
      <Row className="mt-4 px-4">
                <Col md={{ span: 6, offset: 6 }}>
                    {renderGiftCheckbox()}
                    {renderTermsCheckbox()}
                    {renderSubtotal()}
                    {renderCheckoutButtons()}
                </Col>
                </Row>
    </Container>
                    );
                    };

export default CartView;
