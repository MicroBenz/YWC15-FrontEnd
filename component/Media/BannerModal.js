import React from 'react';
import styled, { keyframes } from 'styled-components';
import FullScreenModal from '../Core/FullScreenModal';
import colors from '../../utils/colors';

import Button from './Button';

const showing = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  position: relative;
  padding: 25px 50px;
  animation: ${showing} .8s;
`;

const Header = styled.h1`
  font-size: 48px;
  text-align: left;
`;

const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 10px;
  i {
    font-size: 47px;
    color: ${colors.darkCyan};
  }
`;

const BannerImg = styled.img`
  max-height: 350px;
  box-shadow: 0 0 20px ${colors.darkCyan};
`;

const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: baseline;
   
  h1 {
    font-size: 32px;
  }

  > * {
    margin: 10px 0;
  }

  input {
    font-family: "Cordia New";
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.8);
    transition: all .4s;
    color: white;
  }
`;

const BannerModal = props => (
  <FullScreenModal>
    <Container class="container">
      <Header>Banner {props.banner.title}</Header>
      <CloseButton onClick={props.hideModal}><i className="fa fa-times" /></CloseButton>
      <div className="columns">
        <div className="column">
          <BannerImg src={props.banner.img} alt="" />
        </div>
        <Form className="column">
          <h1>กรุณากรอกข้อมูล</h1>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="ชื่อเว็บไซต์ของคุณ" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="ลิงค์เว็บไซต์ของคุณ" />
            </div>
          </div>
          <Button />
        </Form>
      </div>
    </Container>
  </FullScreenModal>
);

export default BannerModal;
