import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body, #root {
  height: 100vh
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root { 
    display: flex;
    flex-direction: column;
  
}

#root > .App > header, #root > .App > footer {
    flex: 0 0 auto;
    height: 200px;
    background: #071635;
    width: 100%;
}

#root > .App > main {
    flex:  1 1 auto;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export default GlobalStyles;
