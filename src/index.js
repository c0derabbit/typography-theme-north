const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'Helvetica Neue',
  'sans-serif',
];

const textColor = '#222';
const accent = '#ff3322';

const theme = {
  title: 'North',
  baseFontSize: '17px',
  baseLineHeight: 1.58,
  headerLineHeight: 1.2,
  scaleRatio: 2,
  googleFonts: [],
  headerFontFamily: systemFonts,
  bodyFontFamily: systemFonts,
  bodyColor: textColor,
  headerColor: 'inherit',
  bodyWeight: 400,
  boldWeight: 600,
  blockMarginBottom: 1,
  includeNormalize: true,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    body: {
      letterSpacing: '.2px',
    },
    'h1,h2,h3,h4,h5,h6': {
      letterSpacing: '.1px',
    },
    a: {
      color: accent,
      textDecoration: 'none',
      transition: 'color .2s ease',
    },
    'a:hover,a:active': {
      color: textColor,
    },
  }),
};

export default theme;
