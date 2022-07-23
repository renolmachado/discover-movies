interface Color {
  primary: string;
  texts: TextColor;
  container: string;
  background: string;
}

interface TextColor {
  primary: string;
}

export interface ITheme {
  isMobile: boolean;
  mobileMaxWidth: number;
  fontFamily: string;
  colors: Color;
}
