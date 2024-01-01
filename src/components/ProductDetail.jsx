import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL_EXAM } from '../const/APIs';
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap';

const ProductDetail = () => {
    
    const [product,setProduct]=useState({});

    async function fetchAllProducts(){
        const allProduct= await axios.get(`${BASE_URL_EXAM}/1`);
        setProduct(allProduct.data);
        console.log(allProduct);
    }

    React.useEffect(()=>{
        fetchAllProducts();
    },[])

  return (
    <Container>
        <Row className='py-5'>
            <Col className='col-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${product.image}`} />
                </Card>
            </Col>
            <Col className='col-8 d-flex flex-column gap-2 justify-content-center'>
                <h3>{product.category}</h3> 
                <h3 style={{color:"#AD4242"}}>PKR{product.price}</h3>
                <h3>{product.title}</h3>
                <h3>QUANTITY:</h3>
                <div>
                    <ButtonGroup>
                        <Button>-</Button>
                        <Button>0</Button>
                        <Button>+</Button>
                    </ButtonGroup>
                    <Button>ADD TO CART</Button>
                </div>
                <h3>SubTotal: 0</h3>
            </Col>

        </Row>
        <Row className='py-2'>
            <h3>DERCRIPTION:</h3>
            <p>{product.description}</p>
        </Row>
    </Container>
  )
}

export default ProductDetail;
