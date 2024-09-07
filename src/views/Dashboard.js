import React from "react";
import { Line, Pie } from "react-chartjs-2";
import logo from "logo_new_2022.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

function Dashboard() {
  return (
    <>
      <div className="content">
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">NOMBRE DEL ALUMNO:</p>
                      <CardTitle tag="p">Kennya Orona</CardTitle>
                      <p className="card-category">FECHA:</p>
                      <CardTitle tag="p">05 septiembre</CardTitle>
                      <p className="card-category">CARRERA</p>
                      <CardTitle tag="p">DGS</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats"></div>
                <a href="/" className="simple-text logo-mini">
                  <div className="logo-img">
                    <img src={logo} alt="react-logo" />
                  </div>
                </a>
              </CardFooter>
            </Card>
          </Col>         
        </Row>
        <Row>
        </Row>
      </div>

      {/* Footer */}
      <footer>
        <div className="credits ml-auto">
          <div className="copyright">
            &copy; {1900 + new Date().getYear()}, UTD{" "}
            <i className="fa fa-heart heart" /> DERECHOS RESERVADOS Kennya Orona
          </div>
        </div>
      </footer>
    </>
  );
}

export default Dashboard;
