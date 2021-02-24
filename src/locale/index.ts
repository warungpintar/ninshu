export * from "./id";

export interface ILocale {
  delimiters: {
    thousands: string;
    decimal: string;
  };
  abbreviations: {
    thousand: string;
    million: string;
    billion: string;
    trillion: string;
  };
  currency: {
    symbol: string;
  };
}
