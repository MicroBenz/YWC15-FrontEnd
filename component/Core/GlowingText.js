import styled from 'styled-components';

import colors from '../../utils/colors';

const GlowingText = styled.h2`
  color: ${colors.cyan};
  text-shadow: 0 0 10px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 2px #2eb5db, 0 0 20px #2eb5db;
`;

export default GlowingText;
