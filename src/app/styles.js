import { css } from 'styled-components';
import ResetStyles from './../assets/reset.css';
import FontStyles from './../assets/fonts/fonts.css';

export default () => css`
  ${ResetStyles}
  ${FontStyles}

    html, body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
