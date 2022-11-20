import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      yellow: string;
      purple: string;
      white: string;
      background: string;
      "yellow-dark": string;
      "yellow-light": string;
      "purple-dark": string;
      "purple-light": string;
      "base-card": string;
      "base-input": string;
      "base-button": string;
      "base-hover": string;
      "base-label": string;
      "base-text": string;
      "base-subtitle": string;
      "base-title": string;
    };
  }
}
