const theme = {
    flexboxgrid: {
      gridSize: 12, 
      gutterWidth: 1,
      outerMargin: 1.5,
      mediaQuery: "only screen",
      container: {
        sm: 0, 
        md: 64,
        lg: 68, 
      },
      breakpoints: {
        xs: 0, 
        sm: 48, 
        md: 64, 
        lg: 80.3,
      },
    },
    font: {
      base: "'Muli', sans-serif",
      headings: "'Muli', sans-serif",
    },
    fontSize: {
      base: 16,
      lead: 18,
      h1: 42,
      h2: 38,
      h3: 22,
      h4: 18,
      h5: 16,
    },
    fontWeight: {
      light: 200,
      base: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      primary: "rgb(224, 175, 132)",
      secondary: "#0F0F0F",
      tertiary: "#3F5FBF",
      dark: "#252628",
      accent: "#fdebd1",
      gray: "#777B84",
      black: "#0F0F0F",
      white: "#ffffff",
      odd: "black",
    },
    transition: {
      base: "0.3s ease",
    },
  };
  
  export default theme