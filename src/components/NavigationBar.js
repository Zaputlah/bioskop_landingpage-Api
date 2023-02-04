import { Navbar, Container, Nav } from "react-bootstrap" 

const NavigationBar = () => {
    return (  
        <div>
            <Navbar variant="dark red">
                <Container>
                    <Navbar.Brand>Zaputlah</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">Film</Nav.Link>
                        <Nav.Link href="#serialtv">Serial Tv</Nav.Link>
                        <Nav.Link href="#artis">Artis</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar