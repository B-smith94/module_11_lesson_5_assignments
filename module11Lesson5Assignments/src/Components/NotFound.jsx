import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";

// Assingnment 2
function NotFound() {
    return (
        <Container className="bg-info text-light">
            <Row>
                <Col>
                    <h2>404 - Not Found</h2>
                    <Image src="./src/assets/marvel-avengers-comics-vision-crying.jpg" className="img-fluid m-2"></Image>   
                </Col>
                <Col>
                    Sorry, the page you are looking for does not exist.
                    You can always go back to the <Nav.Link as={Link} to="/" className="initialism text-decoration-underline">homepage.</Nav.Link>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;