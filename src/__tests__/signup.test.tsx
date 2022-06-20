import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Signup from "../pages/auth/signup";
import { MyUserContextProvider } from "../hooks/useUser";
import { supabase } from "../utils/supabaseClient";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      reload: jest.fn(),
      push: jest.fn(),
      back: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe("Signup testing flow", () => {
  it("Should render correct sign-up form with email, password form, Sign-up button", async () => {
    render(
      <MyUserContextProvider supabaseClient={supabase}>
        <Signup />
      </MyUserContextProvider>
    );
    const emailElem = screen.getByPlaceholderText(/email/i);
    const passwordElem = screen.getByPlaceholderText(/password/i);
    const signUpBtnElem = screen.getByRole("button", {
      name: /Become our member/i,
    });

    expect(emailElem).toBeInTheDocument();
    expect(passwordElem).toBeInTheDocument();
    expect(signUpBtnElem).toBeInTheDocument();
  });

  it("Should be able to type in email input, password input and submit signup button", async () => {
    render(
      <MyUserContextProvider supabaseClient={supabase}>
        <Signup />
      </MyUserContextProvider>
    );
    const emailElem = screen.getByPlaceholderText(/email/i);
    const passwordElem = screen.getByPlaceholderText(/password/i);

    const signUpBtnElem = screen.getByRole("button", {
      name: /Become our member/i,
    });

    expect(signUpBtnElem).toBeInTheDocument();
    fireEvent.change(emailElem, {
      target: { value: "duykhanh1310@gmail.com" },
    });
    fireEvent.change(passwordElem, {
      target: { value: "123456" },
    });
    expect(emailElem.value).toBe("duykhanh1310@gmail.com");
    expect(passwordElem.value).toBe("123456");
    fireEvent.submit(signUpBtnElem);
  });
});
