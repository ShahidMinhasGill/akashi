import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(theme) => theme.theme.body};
    color: ${(theme) => theme.theme.text};
    select {
      background-color: ${(theme) => theme.theme.body};
      color: ${(theme) => theme.theme.text};
      background-image: ${(theme) => theme.theme.selectArrowImage};
    }
    p{
      color: ${({ theme }) => theme.text};
    }
    a{
      color: ${({ theme }) => theme.text};
      text-decoration: none;
    }

    span{
      color: ${({ theme }) => theme.text};
    
    }
    h6{
      color: ${({ theme }) => theme.text}
    }
    h2{
      color: ${({ theme }) => theme.text}
    }
    h3{
      color: ${({ theme }) => theme.text}
    }
  }
`;
