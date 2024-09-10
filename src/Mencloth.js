import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Mencloth() {
    const [apidata, setData]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((result)=>{
            result.json().then((data)=>{
                setData(data)
                console.log(data)
            })
        })
    },[])
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4' style={{padding:"20px"}}>
        {
            apidata.map((item)=>
                item.category=="men's clothing"?
                <MDBCol>
        <MDBCard className='h-100' style={{paddingBottom:"10px"}}>
          <center>
          <MDBCardImage
            src= {item.image}
            alt='...'
            position='top'
            style={{width:"100px", height:"100px", paddingTop:"10px"}}
          />
          </center>
          <MDBCardBody >
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80}Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
            <MDBCardText>
              {item.description.substr(0,100)}
            </MDBCardText>
          </MDBCardBody>
          <center>
            <MDBBtn style={{width:"200px"}}>View Details</MDBBtn>
          </center>
        </MDBCard>
      </MDBCol>:null
            )
        }
      
    </MDBRow>
  );
}