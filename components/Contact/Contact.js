import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "./Contact.module.scss";
import { MdOutlineLocationCity } from "react-icons/md";
const Contact = () => {
  return (
    <section className={styles.contactWrapper}>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={styles.ourContact}>
              <div className={styles.ContactHeading}>
                <h6>
                  <span>contact details</span>
                </h6>
                <h2 className="contactSubHeading">Our Contacts</h2>
              </div>
              {/* <p>
                Give us a call or drop by anytime, we endeavour to answer all
                enquiries within 24 hours on business days. We will be happy to
                answer your questions.
              </p> */}
              {/* <div className={styles.contactInfo}>
                                <MdOutlineLocationCity className={styles.contactIcons} />
                                <div className={styles.infoText}>
                                    <h6>Our Address:</h6>
                                    <p>715-7th Floor, Pukhraj Corporate,Navlakkha Square, Indore(MP)-452001,INDIA.</p>
                                </div>
                            </div> */}
              <div className={styles.contactInfo}>
                <MdOutlineLocationCity className={styles.contactIcons} />
                <div className={styles.infoText}>
                  <h6>Our Address:</h6>
                  {/* <p>
                    715-7th Floor, Pukhraj Corporate,Navlakkha Square,
                    Indore(MP)-452001,INDIA.
                  </p> */}
                </div>
              </div>
              <div className={styles.contactInfo}>
                <MdOutlineLocationCity className={styles.contactIcons} />
                <div className={styles.infoText}>
                  <h6>OUR MAILBOX:</h6>
                  <p>info@yuvasoftech.com</p>
                </div>
              </div>
              <div className={styles.contactInfo}>
                <MdOutlineLocationCity className={styles.contactIcons} />
                <div className={styles.infoText}>
                  <h6>OUR PHONES:</h6>
                  <p>Phone: +91 (0) 731 4227200</p>
                  <p>Mobile: +91 (0) 999 3351929</p>
                  <p>Mobile: +91 (0) 990 7286003</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.737995989071!2d75.87353601496189!3d22.70079538511704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce00db324a7%3A0xe0bfa4e3457de59c!2sYuvasoft%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1648557240354!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
