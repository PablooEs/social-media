import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./style.css";

export default function Index() {
  return (
    <>
      <div className="principal">
        <Container fluid="md">
          <Row>
            <Col md={{ span: 4 }}>
              <h3>Login</h3>
            </Col>
            <Col>
              <Row className="justify-content-xs-center">
                <Col xs={8}>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        Username
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                  </InputGroup>
                </Col>

                <Col xs={8}>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">
                        Password
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl />
                  </InputGroup>
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col>
                      <Button variant="outline-success">Login</Button>
                    </Col>
                    <Col className="m" xs={{ span: 10 }}>
                      <Button variant="outline-primary">Register</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
