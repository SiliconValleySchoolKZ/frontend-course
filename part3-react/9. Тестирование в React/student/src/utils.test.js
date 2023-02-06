import { formatUserName } from "./utils";

describe("utils", () => {
  test("formatUserName adds @ at the beginning of the username", () => {
    expect(formatUserName("Kanat")).toBe("@Kanat");
  });
  test("formatUserName does not add @ when it is already provided", () => {
    expect(formatUserName("@Kanat")).toBe("@Kanat");
  });
});
