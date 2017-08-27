import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';
import HeaderArtwork from './HeaderArtwork';

const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: ${colors.cyan};
  font-size: 62px;
  line-height: 58px;
  text-transform: uppercase;
  font-weight: 600;
  padding: 7px 0px;
`;

const Subtitle = styled.h2`
  font-size: 30px;
  line-height: 32px;
  color: ${colors.white};
`;

const SectionHeader = ({ title = '', subtitle = '' }) => (
  <Container>
    <HeaderArtwork />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default SectionHeader;
