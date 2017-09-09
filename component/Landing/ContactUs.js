import React from 'react';
import styled from 'styled-components';

import content from './content.json';
import colors from '../../utils/colors';

const ContactUsWarpper = styled.div`
  width: 420px;
  margin: 0 auto;
  position: relative;
  @media(max-width: 768px) {
    width: 330px;
  }
  .contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width: 768px) {
      width: 65%;
    }
  }
`;

const Header = styled.h1`
  font-size: 38px;
  font-weight: 600;
  color: ${colors.cyan};
  line-height: 1em;
  padding-top: 10px;
`;

const Info = styled.p`
  font-size: 22px;
  ${props => props.small && 'font-size: 18px;'}
  @media(max-width: 768px) {
    font-size: 18px;
    ${props => props.small && 'font-size: 16px;'}
  }

   a {
     &:hover {
      color: ${colors.cyan};
     }
   }
`;

const ContactUs = () => (
  <ContactUsWarpper>
    <img src="/static/img/landing/materials/contact.png" alt="" />
    <div className="contact">
      <Header>CONTACT US</Header>
      <Info>
        <a href="+66641747080">064-174-7080</a> (พี่เบ๊บ)
      </Info>
      <Info>
        <a href="+66924587067">092-458-7067</a> (พี่ฟง)
      </Info>
      <Info>
        <a href="+6656667571">085-666-7571</a> (พี่เบนซ์)
      </Info>
      <Info small>Email: <a href="mailto:ywc@webmaster.or.th">ywc@webmaster.or.th</a></Info>
    </div>
  </ContactUsWarpper>
);

export default ContactUs;
