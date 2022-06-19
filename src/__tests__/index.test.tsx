import { render } from "@testing-library/react";
import { MyUserContextProvider } from "../hooks/useUser";
import Home from "../pages";
import { supabase } from "../utils/supabaseClient";
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
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
describe("Home", () => {
  it("Should renders a home page", () => {
    render(
      <MyUserContextProvider supabaseClient={supabase}>
        <Home />
      </MyUserContextProvider>
    );
  });
});
