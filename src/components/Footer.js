import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-dark text-white'>
      <Container>
        <div className='row mt-5 p-4'>
          <div className='col'>
            <h2 className='mb-3' style={{fontFamily:"brush script mt"}}>Contact Us</h2>
            <p><Link to='/' className='text-white'><FaLocationDot /> Location</Link></p>
            <p><Link to='/' className='text-white'><FaPhone /> Call +01 1234567890</Link></p>
            <p><Link to='/' className='text-white'><MdEmail /> feane@gmail.com</Link></p>
          </div>
          <div className='col'>
          <h2 className='mb-3' style={{fontFamily:"brush script mt"}}>Feane</h2>
          <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
          <Link className='text-white fs-3 me-2'><FaFacebook /></Link>
          <Link className='text-white fs-2 me-2'><AiFillTwitterCircle /></Link>
          <Link className='text-white fs-2 me-2'><TiSocialLinkedinCircular className='bg-white text-dark rounded-circle' /></Link>
          <Link className='text-white fs-3'><FaInstagramSquare className='rounded-circle'/></Link>
          <Link className='text-white fs-3'> <FaPinterest /></Link>

          </div>
          <div className='col'>
          <h2 className='mb-3' style={{fontFamily:"brush script mt"}}>Opening Hours</h2>
          <p>Everyday</p>
          <p>10.00 Am -10.00 Pm</p>
          </div>         
        </div>
      <p className='mt-4'>&copy; All Rights Reserved By Feane Restaurant</p>
      <p className='pb-4'>&copy; Distributed By Revati Songire</p>
      </Container>
    </div>
  )
}

export default Footer