interface Color {
  primary: string;
  container: string;
}

export interface ITheme {
  isMobile: boolean;
  mobileMaxWidth: number;
  fontFamily: string;
  colors: Color;
}
