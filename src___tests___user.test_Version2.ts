import { hashPassword, comparePassword } from "../auth/hashUtils";

describe("Password hashing utils", () => {
  it("should hash and verify password", async () => {
    const pw = "demoPW123";
    const hash = await hashPassword(pw);
    expect(await comparePassword(pw, hash)).toBe(true);
  });
  it("should fail verification on wrong password", async () => {
    const pw = "demoPW123";
    const hash = await hashPassword(pw);
    expect(await comparePassword("badPW", hash)).toBe(false);
  });
});