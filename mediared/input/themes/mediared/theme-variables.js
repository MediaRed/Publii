/*
 * Custom function used to generate the output of the theme variables
 */
var generateThemeVariables = function(params) {
  let fontParams = {
      raleway: {
        name: 'Raleway',
        family: '\'Raleway\', sans-serif',
        weight: '100 900'
      }
  };

  let fontBodyName = fontParams[params.fontBody]?.name;
  let fontBodyFamily = fontParams[params.fontBody]?.family;
  let fontBodyWeight  = fontParams[params.fontBody]?.weight;
  
  let fontHeadingsName = fontParams[params.fontHeadings]?.name;
  let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
  let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;
 
  if(params.fontMenu === 'system-ui') {
      params.fontMenu = fontParams['system-ui'].family;
  } 
  
  if(params.fontLogo === 'system-ui') {
      params.fontLogo = fontParams['system-ui'].family;
  } 

  let output = '';

     if((params.fontBody !== 'system-ui') && (params.fontBody !== params.fontHeadings)) {
        output += `             
           @font-face {
              font-family: '${fontBodyName}';
              src: url('../dynamic/fonts/${params.fontBody}/${params.fontBody}.woff2') format('woff2 supports variations'),
              url('../dynamic/fonts/${params.fontBody}/${params.fontBody}.woff2') format('woff2-variations');
              font-weight: ${fontBodyWeight};
              font-display: swap;
              font-style: normal;
           }
        `;   
     }

     if(params.fontHeadings !== 'system-ui') {
        output += `             
           @font-face {
              font-family: '${fontHeadingsName}';
              src: url('../dynamic/fonts/${params.fontHeadings}/${params.fontHeadings}.woff2') format('woff2 supports variations'),
              url('../dynamic/fonts/${params.fontHeadings}/${params.fontHeadings}.woff2') format('woff2-variations');
              font-weight: ${fontHeadingsWeight};
              font-display: swap;
              font-style: normal;
           }
        `;   
     }

     output += `
        :root {
           --page-margin:        ${params.pageMargin};
           --page-width:         ${params.pageWidth}; 
           --entry-width:        ${params.entryWidth}; 
           --body-font:          ${fontBodyFamily};
           --heading-font:       ${fontHeadingsFamily};
           --logo-font:          ${params.fontLogo};
           --menu-font:          ${params.fontMenu};
           --font-weight-normal: ${params.fontBodyWeight}; 
           --font-weight-bold:   ${params.fontBoldWeight}; 
           --headings-weight:    ${params.fontHeadignsWeight};
           --headings-transform: ${params.fontHeadingsTransform};
           --line-height:        ${params.lineHeight}; 
           --hero-bg:            ${params.backgroundHero};
           --header-height:      ${params.navbarHeight};
           --hero-min-height:    ${params.heightMinHero};
           --hero-max-height:    ${params.heightMaxHero};
           --hero-aspect-ratio:  ${params.aspectRatioHero};
           --primaryHeaderColor  ${params.primaryHeaderColor};
           --primaryHeaderTextColor  ${params.primaryHeaderTextColor};
           --primaryBodyColor  ${params.primaryBodyColor};
           --primaryBodyTextColor  ${params.primaryBodyTextColor};
           --primaryFooterColor  ${params.primaryFooterColor};
           --primaryFooterTextColor  ${params.primaryFooterTextColor};
           --hero-opacity:       ${params.opacityHero};
           --grid-gap:           ${params.gridGap}rem;
           --card-height:        ${params.cardHeight};
           --card-opacity:       ${params.cardsOpacity};
           --card-accent-opacity:${params.cardsAccentOpacity};
           --border-radius:      ${params.layoutTypeBorderRadius}px;
           --white:              #FFFFFF;
           --black:              #000000;
           --dark:               #111111;
           --gray-1:             #6C6C6F;
           --gray-2:             #747577;
           --light:              #D5D5D5;
           --lighter:            #F3F3F3;
           --color:              ${params.primaryColor};   
           --color-rgb:          ${params.primaryColor.replace('#', '').match(/[a-f0-9]{2,2}/gmi).map(n => parseInt(n, 16)).join(', ')};
           --text-color:         ${params.textColor};   
           --headings-color:     ${params.headingsColor}; 
        } 
     `;

  return output;
}
     
module.exports = generateThemeVariables; 