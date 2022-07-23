interface Color {
  primary: string;
  container: string;
  background: string;
}

export interface ITheme {
  isMobile: boolean;
  mobileMaxWidth: number;
  fontFamily: string;
  colors: Color;
}
