import { hashPassword, comparePassword } from "../auth/hashUtils";

describe("Password hashing utility", () => {
  it("should hash and validate password", async () => {
    const pw = "test123";
    const hash = await hashPassword(pw);
    expect(await comparePassword(pw, hash)).toBe(true);
    expect(await comparePassword("wrongpw", hash)).toBe(false);
  });
});