import { Card, Col, Container, Row, Image } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"

/* <a href="https://id.pngtree.com/free-backgrounds">foto latar belakang gratis dari id.pngtree.com</a> */
 
const People = () => {
    const [Movie, setMovie] = useState([])
    useEffect (() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/person/popular`, {
            params: {
                api_key:process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            setMovie(response.data.results)
            // cara cek data/debuging
            // console.log("datas => ", response.data.results)
        })
    }, [])
    return (  
        <div>
            <Container>
                <br></br>
                <h1 className="text-white">Artis</h1>
                <br></br>
                <Row>
                    {Movie.map((result, index) => {
                        return(
                            <Col md={4} className="MovieWrapper" id="artis" key={index}>
                                <Card className="text-white text-center MovieImage">
                                <Card className="bg-dark text-white text-center MovieImage">     
                                        <Image src={`${process.env.REACT_APP_IMG_URL}/${result.profile_path}`} alt=""  className="images"/>
                                        <div className="p-2 m-1 text-white">
                                            <Card.Title className="text-center">{result.name}</Card.Title>
                                            <Card.Text className="text-left">Ketenaran : {result.popularity}</Card.Text >
                                            <Card.Text className="text-left">Profesi : {result.known_for_department}</Card.Text>
                                            <Card.Text className="text-left">{result.vote_average}</Card.Text>
                                        </div>
                                </Card>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default People