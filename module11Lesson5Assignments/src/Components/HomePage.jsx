import { Button, Container, Card, Image } from 'react-bootstrap';

// Assignment 1
const Home = () => {
    return (
        <Container className="bg-info text-light p-3 border border-success rounded">{/*Assignment 1 Task 2 and 3*/}
            <h1>Marvel API</h1>
            <h3>Home</h3>
            <Image src='./src/assets/marvel-logo-512x512.png' fluid></Image>{/*Assignment 1, Task 4*/}
            <p>This component is under construction. Check back later!</p>
            <Button variant="primary" className='shadow bg-success'>Shop Now</Button> {/*Assignment 1 Task 1*/}
            <Card className='m-2 bg-primary text-light'> {/*Assignment 1 Task 3*/}
                <Card.Header>
                    <Card.Title>Information and Promotions</Card.Title>
                    <Card.Body>This is where any relavent links to products, promotions, and relavent information will go.</Card.Body>
                    <Card.Footer>Last update: 12/26/24</Card.Footer>
                </Card.Header>
            </Card>
        </Container>
    );
};

export default Home;