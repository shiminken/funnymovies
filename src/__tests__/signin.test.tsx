import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { SignInForm } from "../components/molecules";
import { MyUserContextProvider } from "../hooks/useUser";
import { supabase } from "../utils/supabaseClient";

import MainTemplate from "../components/MainTemplate";

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

describe("Signin testing flow", () => {
  it("Should render correct sign-in form with email, password form, Login button and Register button", async () => {
    render(<SignInForm />);

    const emailElem = screen.getByPlaceholderText(/email/i);
    const passwordElem = screen.getByPlaceholderText(/password/i);
    const lognInBtnElem = screen.getByRole("button", {
      name: /Login/i,
    });

    const registerBtnElem = screen.getByRole("button", { name: /Register/i });
    expect(emailElem).toBeInTheDocument();
    expect(passwordElem).toBeInTheDocument();
    expect(lognInBtnElem).toBeInTheDocument();
    expect(registerBtnElem).toBeInTheDocument();
  });

  it("Should be able to type in email input, password input and submit login button", async () => {
    render(<SignInForm />);
    const emailElem = screen.getByPlaceholderText(/email/i);
    const passwordElem = screen.getByPlaceholderText(/password/i);

    const lognInBtnElem = screen.getByRole("button", {
      name: /Login/i,
    });

    expect(lognInBtnElem).toBeInTheDocument();
    fireEvent.change(emailElem, {
      target: { value: "duykhanh1310@gmail.com" },
    });
    fireEvent.change(passwordElem, {
      target: { value: "123456" },
    });
    expect(emailElem.value).toBe("duykhanh1310@gmail.com");
    expect(passwordElem.value).toBe("123456");
    fireEvent.submit(lognInBtnElem);
  });

  it("Should Render Logined Section Header", async () => {
    render(
      <MyUserContextProvider supabaseClient={supabase}>
        <MainTemplate>
          <div>OK</div>
        </MainTemplate>
      </MyUserContextProvider>
    );

    const logedInSectionElem = await screen.findByTestId(
      "logedin-section-header"
    );
    expect(logedInSectionElem).toBeInTheDocument();

    const sharedButtonElem = screen.getByRole("button", {
      name: /Share a movie/i,
    });

    expect(sharedButtonElem).toBeInTheDocument();

    const userNameElem = screen.getByText("Welcome: duykhanh1310@gmail.com");
    expect(userNameElem).toBeVisible();
  });
});
