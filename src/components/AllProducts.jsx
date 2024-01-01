
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BASE_URL_EXAM } from '../const/APIs';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AllProducts = () => {

    const [products,setProducts]=useState([]);

    async function fetchAllProducts(){
        const allProduct= await axios.get(BASE_URL_EXAM);
        setProducts(allProduct.data);

    }

    useEffect(()=>{
        fetchAllProducts();
    },[])


  return (
    <Container>
      <Row className='py-1 mt-5'>
        <h1 style={{textAlign:"center"}}>Discover NEW Arrivals</h1>
      </Row>  
      <Row className='py-1'>
        <h3 style={{textAlign:"center", color:"#555555"}}>Recently added shirts!</h3>
      </Row>  
       <Row className='d-flex gap-2 py-5 mt-3'>
        {products.map((_,index)=>{
            return (
              <Card key={_.id} style={{ width: '16rem',  }}>
                  <Link to={`/${index}`} style={{textDecoration:"none"}}>
                <div 
                    className='d-flex justify-content-center align-items-center pt-3'
                    >
                    <img src={_.image} width={"170px"} alt='_' />
                </div>    
                <Card.Body style={{textAlign:"center"}}>
                  <h5>{_.category}</h5>
                  <h5 style={{color:"#024E82"}}>{_.price}</h5>
                </Card.Body>
              </Link>
              </Card>
            )
        })}
        </Row> 
        
        <Row 
          style={{color:"white",  textAlign:"center",}}
          className='d-flex gap-2 py-5 mt-3'  
          >
          <Col className='col-1.5 py-5 px-5' 
            style={{backgroundColor:"black",}}
            >
            <h3 style={{textTransform:"uppercase"}}>peace of mind</h3>
            <p>A one-stop platform for all your fashion needs, hassle-free. Buy with a peace of mind.</p>
            <Button>BUY NOW</Button>
          </Col>
          <Col className='py-5 px-5'
                style={{backgroundColor:"black",}}
            >
          <h3 style={{textTransform:"uppercase"}}>Buy 2 Get 1 Free</h3>
            <p>End of season sale. Buy any 2 items of your choice and get 1 free.</p>
            <Button>BUY NOW</Button>

          </Col>
        </Row>


    </Container>
  )
}

export default AllProducts;
