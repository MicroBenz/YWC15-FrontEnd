import styled from 'styled-components';

const FreeImage = styled.img.attrs({
  alt: 'ฟรีตลอดค่าย',
  src: '/static/img/landing/welcoming/free.png'
})`
  width: 170px;
  position: fixed;
  top: 0px;
  left: 20px;
  z-index: 15;
  @media(max-width: 768px) {
    position: absolute;  
    width: 95px;
    top: 10px;
    left: 10px;
  }
`;

export default FreeImage;
