import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Projects() {
    return (
        <main style={{ padding: "1rem"}}>
            <h2>Projects page</h2>
            <Container fluid>
            <Row>
            <Col xs={3} md={2} />
            <Col xs={6} md={4}>
            <Form>
                <Form.Group className="mb-3 test" controlID="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form>
            </Col>
            </Row>
            </Container>
        </main>
    )
}

export default Projects;