import React from 'react';
import styled from 'styled-components'


const ContactUsWarpper = styled.div`
  width: 35%;
  margin: 0 auto;
  position: relative;

  .contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Header = styled.h1`
  font-size: 52px;
  line-height: 1em;
  padding-top: 10px;
`;

const Info = styled.p`
  font-size: 22px;
`;

const ContactUs = () => {
  return (
    <ContactUsWarpper>
      <img src="/static/img/landing/materials/contact.png" alt="" />
      <div className="contact">
        <Header>CONTACT US</Header>
        <Info>084-147-8991 (พี่แนน)</Info>
        <Info>084-147-8991 (พี่แนน)</Info>
        <Info>084-147-8991 (พี่แนน)</Info>
        <Info>Email: ywc@webmaster.or.th</Info>
      </div>
    </ContactUsWarpper>
  );
};

export default ContactUs;
