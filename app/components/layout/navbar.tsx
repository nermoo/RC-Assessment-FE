'use client'
import React from 'react';
import { Button, Col, Row } from 'antd';

const Navbar: React.FC = () => {
    
      return (
            <Row className='flex justify-between items-center bg-transparent z-10 relative mx-20 my-6'>
                <Col className=''>Logo</Col>
                <Col className="ml-auto flex items-center space-x-4">
                  <div>Home</div>
                  <Button type="primary">Add Property</Button>
                </Col>
            </Row>
          
      );
}

export default Navbar;