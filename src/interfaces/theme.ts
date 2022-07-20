interface Color {
  primary: string;
}

export interface ITheme {
  isMobile: boolean;
  mobileMaxWidth: number;
  fontFamily: string;
  colors: Color;
}
