import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Axios from 'axios'
import IdCard from './Card'
function App() {

  const [details, setDetails] = useState({});

  const url = 'https://randomuser.me/api/'
  const fetchDetails = async () => {

    // step1 -->const response = await Axios.get(url, {})
    // step2 -->const newData = response.data
    const {data} = await Axios.get(url, {})
    // we can have 2 parameters inside get method like
    // one for api url and another for object like header/tokens

    console.log("RESPONSE: ", data)

    const details = data.results[0]

    setDetails(details)
  };

  useEffect(() => {
    fetchDetails()
  },[])

  return (
    <Container fluid className="p-4 App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <IdCard details={details} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
