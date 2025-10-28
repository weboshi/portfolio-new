declare module 'vara' {
  interface VaraTextOptions {
    text: string;
    fontSize?: number;
    strokeWidth?: number;
    color?: string;
    duration?: number;
    delay?: number;
    id?: number;
    autoAnimation?: boolean;
  }

  class Vara {
    constructor(
      elementId: string,
      fontUrl: string,
      textOptions: VaraTextOptions[]
    );
  }

  export default Vara;
}
