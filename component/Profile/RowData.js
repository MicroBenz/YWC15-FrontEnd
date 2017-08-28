import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: 20px;
`;

const RowData = ({ title, value, newLine = false }) => (
  newLine ? (
    <div>
      <P><b>{title}</b></P>
      <P>{value}</P>
    </div>
  ) : <P><b>{title}:</b> {value}</P>
);

export default RowData;
