import { main } from "./main"

describe("Defines the entry point of the application", () => {
  it("Returns 0", () => {
    expect(main()).toBe(0);
  })
})