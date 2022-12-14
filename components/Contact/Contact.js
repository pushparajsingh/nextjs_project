import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./Contact.module.scss";
import { MdOutlineLocationCity } from "react-icons/md";
import Title from "../Layout/Titles/Titles";
import Link from "next/link";
import {useForm} from "react-hook-form";
import { emailPattern } from "../../constants";
const Contact = () => {

  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>{
    console.log("contact-form-data",data)
  }
  return (
    <section className={styles.contactWrapper}>
      <Container>
        <Row>
          <Col lg={5}>
            <div className={styles.ourContact}>
              <div className={styles.ourContactContainer}>
                <div className={styles.ContactHeading}>
                  <h6>
                    <span>contact details</span>
                  </h6>
                  <h2 className="contactSubHeading">Our Contacts</h2>
                </div>
                <div className={styles.contactInfo}>
                  <MdOutlineLocationCity className={styles.contactIcons} />
                  <div className={styles.infoText}>
                    <h6>Our Address:</h6>
                  </div>
                </div>
                <div className={styles.contactInfo}>
                  <MdOutlineLocationCity className={styles.contactIcons} />
                  <div className={styles.infoText}>
                    <h6>OUR MAILBOX:</h6>
                    <p>
                      <Link href="mailto:info@yuvasoftech.com">
                        <a>info@yuvasoftech.com</a>
                      </Link>
                    </p>
                  </div>
                </div>
                <div className={styles.contactInfo}>
                  <MdOutlineLocationCity className={styles.contactIcons} />
                  <div className={styles.infoText}>
                    <h6>OUR PHONES:</h6>
                    <p>
                      Phone:{" "}
                      <Link href="tel:+91 (0) 731 4227200">
                        <a>+91 (0) 731 4227200</a>
                      </Link>
                    </p>
                    <p>
                      Mobile:{" "}
                      <Link href="tel:+91 (0) 999 3351929">
                        <a>+91 (0) 999 3351929</a>
                      </Link>
                    </p>
                    <p>
                      Mobile:{" "}
                      <Link href="tel:+91 (0) 990 7286003">
                        <a>+91 (0) 990 7286003</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className={styles.contactFormWrappper}>
              <Title
                value="Let Connect"
                span="Tell Me More "
                subTitle="About Your Details"
              />
              {/* <p>Tell Me More About Your Details</p> */}
              {/* <h6>Are you Ready for a Better, more Productive Business?</h6>           */}
              <Form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col lg={6}>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      className="mb-3"
                      {...register("name", {
                        required: true,
                      })}
                      errors={errors}
                    />
                    {/* {errors.name && "Last name is required"} */}
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      className="mb-3"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: emailPattern,
                          message: "Email should be in valid format.",
                        },
                      })}
                      errors={errors}
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="number"
                      placeholder="Phone Number"
                      className="mb-3"
                      {...register("number", {
                        required: true,
                      })}
                      errors={errors}
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      className="mb-3"
                      {...register("companyname", {
                        required: true,
                      })}
                      errors={errors}
                    />
                  </Col>
                  <Col lg={12}>
                    <Form.Control type="text" placeholder="Message" {...register("Message",{
                      require:true,

                    })}
                    errors={errors} />
                  </Col>
                  <Col lg={12}>
                    <Button
                      type="submit"
                      className="themeButton btn btn-primary m-0"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.737995989071!2d75.87353601496189!3d22.70079538511704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce00db324a7%3A0xe0bfa4e3457de59c!2sYuvasoft%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1648557240354!5m2!1sen!2sin"
          width="100%"
          minHeight="400px"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
