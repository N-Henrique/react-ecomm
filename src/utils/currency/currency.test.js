import currency from "./currency";

describe("Currency Util", () => {
  it("should return a formatted currency", () => {
    const value = 1000;
    const formattedValue = currency.format(value);
    expect(formattedValue).toEqual("R$\xa01.000,00");
  });
});
