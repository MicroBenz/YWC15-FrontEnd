import React from 'react';

const Checkbox = props => (
  <label className="checkbox">
    <input
      type="checkbox"
      checked={props.checked}
      onChange={e => props.onChecked(e.target.checked)}
    />
    {props.label}
  </label>
);

export default Checkbox;
