import React from 'react';
import styled from 'styled-components';

const CheckboxLabel = styled.label`
  font-family: 'Cordia New';
  font-weight: 600;
  font-size: 22px;
`;

const Checkbox = props => (
  <CheckboxLabel className="checkbox">
    <input
      type="checkbox"
      checked={props.checked}
      onChange={e => props.onChecked(e.target.checked)}
    />
    {props.label}
  </CheckboxLabel>
);

export default Checkbox;
