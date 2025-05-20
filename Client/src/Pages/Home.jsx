import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {

  const [mydata, setMydata] = useState([]);



  const LoadData = async()=>{
    const api = "http://localhost:8000/Product/DisplayData";
    try {
      const response = await axios.get(api)
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
  LoadData();
  },[])




const ans = mydata.map((key)=>{
  return(
    <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:8000/${key.defaultImage}`} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          Brand:{key.brand}
          <br></br>
          Price:{key.price}
        </Card.Text>
        <Button variant="warning">Add To Cart</Button>
      </Card.Body>
    </Card>

    </>
  )
})






  return (
    <>
    
    <Carousel>
      <Carousel.Item>
        <img src="a1.jpg" alt="" width="100%" height="500px"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="a6.jpg" alt="" width="100%" height="500px" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="a3.jpg" alt="" width="100%" height="500px" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div id="cart">
      {ans}
    </div>
    
    </>
  )
}

export default Home