
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { BASE_URL_EXAM } from '../const/APIs';
import axios from 'axios';
const TopSellers = () => {

    const [products,setProducts]=useState([]);

    async function fetchAllProducts(){
        const topProducts= await axios.get(`${BASE_URL_EXAM}?${"limit=4"}`);
        setProducts(topProducts.data);

    }

    useEffect(()=>{
        fetchAllProducts();
    },[])


  return (
    <Container> 
      <Row className='py-1 mt-5'>
        <h1 style={{textAlign:"center"}}>Top Sellers</h1>
      </Row>  
      <Row className='py-1'>
        <h3 style={{textAlign:"center", color:"#555555"}}>Browse our top-selling products</h3>
      </Row>  
       <Row className='d-flex gap-2 py-5 mt-3'>
        {products.map((_,index)=>{
            return (
                <Card key={_.id} style={{ width: '16rem' }}>
                <div 
                    className='d-flex justify-content-center align-items-center pt-3'
                >
                    <img src={_.image} width={"170px"} alt='_' />
                </div>    
                <Card.Body style={{textAlign:"center"}}>
                  <h5>{_.category}</h5>
                  <h5 style={{color:"#024E82"}}>{_.price}</h5>
                </Card.Body>
              </Card>
            )
        })}
        </Row> 
        <div className='d-flex justify-content-center align-items-center my-5'>
            <Button >SHOP NOW</Button>
        </div>
    </Container>
  )
}

export default TopSellers;
