import { css } from 'styled-components';
import ResetStyles from './../assets/reset.css';
import FontsStyles from './../assets/fonts/fonts.css';

import SourceSansProBoldWoffTwo from './../assets/fonts/SourceSansPro-Bold.woff2';
import SourceSansProBoldWoff from './../assets/fonts/SourceSansPro-Bold.woff';
import SourceSansProRegularWoffTwo from './../assets/fonts/SourceSansPro-Regular.woff2';
import SourceSansProRegularWoff from './../assets/fonts/SourceSansPro-Regular.woff';
import PoppinsRegularWoffTwo from './../assets/fonts/Poppins-Regular.woff2';
import PoppinsRegularWoff from './../assets/fonts/Poppins-Regular.woff';
import PoppinsBoldWoffTwo from './../assets/fonts/Poppins-Bold.woff2';
import PoppinsBoldWoff from './../assets/fonts/Poppins-Bold.woff';
import PoppinsSemiBoldWoffTwo from './../assets/fonts/Poppins-SemiBold.woff2';
import PoppinsSemiBoldWoff from './../assets/fonts/Poppins-SemiBold.woff';

export default () => css`
  ${ResetStyles}
  ${FontsStyles}

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('${SourceSansProBoldWoffTwo}') format('woff2'),
      url('${SourceSansProBoldWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    src: url('${SourceSansProRegularWoffTwo}') format('woff2'),
      url('${SourceSansProRegularWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('${PoppinsRegularWoffTwo}') format('woff2'),
      url('${PoppinsRegularWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('${PoppinsBoldWoffTwo}') format('woff2'),
      url('${PoppinsBoldWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url('${PoppinsSemiBoldWoffTwo}') format('woff2'),
      url('${PoppinsSemiBoldWoff}') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  html,
  body {
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
