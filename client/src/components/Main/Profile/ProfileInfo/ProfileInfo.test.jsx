import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ProfileInfo from "./ProfileInfo";
import { UserContext } from "@/src/context/userContext";

describe("ProfileInfo Component", () => {
  it("renders Perfil", () => {
    const mockUser = { name: "Test User", img: "test.jpg", email: "test@mail.com" };
   const { container } = render(
      <UserContext.Provider value={{ user: mockUser }}>
        <ProfileInfo />
      </UserContext.Provider>
    );
    const h3 = container.querySelector("h3");
    expect(h3.textContent).toContain("Perfil de");
  });
  it("renders Perfil Email", () => {
    const mockUser = { name: "Test User", img: "test.jpg", email: "test@mail.com" };
   const { container } = render(
      <UserContext.Provider value={{ user: mockUser }}>
        <ProfileInfo />
      </UserContext.Provider>
    );
    const p = container.querySelector(".profile-info__container__data > p");
    expect(p.textContent).toContain("@");
  });
});