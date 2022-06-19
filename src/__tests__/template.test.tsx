import { render } from "@testing-library/react";
import MainTemplate from "../components/MainTemplate";
import { MyUserContextProvider } from "../hooks/useUser";
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
describe("Template", () => {
  it("Template should render header and footer and children inside correctly", () => {
    render(
      <MyUserContextProvider supabaseClient={supabase}>
        <MainTemplate>
          <p>example</p>
        </MainTemplate>
      </MyUserContextProvider>
    );
  });
});
