import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row className="py-3 pt-5 mt-5">
        <Col>
          <h5>COMPANY INFO</h5>
          <p>About Us</p>
          <p>Latest Posts</p>
          <p>Contact Us</p>
          <p>Shop</p>
        </Col>
        <Col>
          <h5>HELP LINKS</h5>
          <p> Tracking</p>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>FAQ</p>
        </Col>
        <Col>
          <h5>USEFUL LINKS</h5>
          <p> Special Offers</p>
          <p>Gift Cards</p>
          <p>Advetising</p>
          <p>Terms of Use</p>
        </Col>
        <Col>
          <h5>GET IN THE KNOW</h5>
          <input type="email" placeholder="ENTER EMAIL" />
          <span>&#62;</span>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p>© 2020 FasTech Systems Private Limited Sukkur, </p>
          <p>Privacy Policy Terms & Conditions</p>
        </Col>
        <Col>
          <img src="/payments.png" alt="pay" width={"400px"} />
        </Col>
      </Row>
    </Container>
  );
}
