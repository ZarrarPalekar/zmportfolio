import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Done For You Marketing Solutions{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <h2>
                  <br />
                  Leads + Appointments = More Closings
                </h2>
              </h1>

              <h2 className="heading-name">
                We help{" "}
                <strong className="main-name">
                  {" "}
                  Real Estate professionals
                </strong>{" "}
                save time and close more deals with end-to-end lead generation,
                follow up, and appointment booking.
              </h2>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
