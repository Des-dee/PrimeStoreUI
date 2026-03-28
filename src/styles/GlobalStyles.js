import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
    color: #333;
    line-height: 1.6;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
  }

  input, textarea, select {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #6C5CE7;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #5A4ABF;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .btn-primary {
    background-color: #6C5CE7;
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background-color: #5A4ABF;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
    }
  }

  .btn-secondary {
    background-color: #fff;
    color: #6C5CE7;
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 600;
    border: 2px solid #6C5CE7;
    transition: all 0.3s ease;

    &:hover {
      background-color: #6C5CE7;
      color: white;
    }
  }

  .btn-danger {
    background-color: #e74c3c;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

export default GlobalStyles;
