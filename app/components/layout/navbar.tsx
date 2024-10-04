'use client'
import React from 'react';
import { Col, Row } from 'antd';

const Navbar: React.FC = () => {
    
      return (
            <Row className='flex justify-between items-center bg-transparent z-10 relative mx-20 my-6'>
                <Col className=''>Logo</Col>
                <Col className=''>
                <div>Home</div>
                </Col>
            </Row>
          
      );
}

export default Navbar;