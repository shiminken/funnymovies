import { render, screen } from "@testing-library/react";
import MovieList from "../pages/movies/list";
import { MovieCard } from "movies-ui-components";

describe("Movies", () => {
  it("Should render Movies List and see a first card item", async () => {
    render(<MovieList />);
    const movieCardItem = await screen.findByTestId("movielists-item-0");
    screen.debug();
    expect(movieCardItem).toBeInTheDocument();
  });

  it("Should render multiple Movie card items", async () => {
    render(<MovieList />);
    const movieCardItem = await screen.findAllByTestId(/movielists-item/i);
    expect(movieCardItem.length).toBe(13);
  });

  it("Should render Movie card with enough information", () => {
    render(
      <MovieCard
        videoId={"XkpRo8smQ5M"}
        title={"Best of me"}
        sharedName={"Ken"}
        voteUpCount={"13"}
        voteDownCount={"20"}
        description={"Love me or love you"}
      />
    );
    const titlElem = screen.getByText(/Best of me/i);
    const sharedNameElem = screen.getByText(/Ken/i);
    const voteUpCountElem = screen.getByText(/13/i);
    const voteDownCountElem = screen.getByText(/20/i);
    const descriptionElem = screen.getByText(/Love me or love you/i);

    expect(titlElem).toBeVisible();
    expect(sharedNameElem).toBeVisible();
    expect(voteUpCountElem).toBeVisible();
    expect(voteDownCountElem).toBeVisible();
    expect(descriptionElem).toBeVisible();
  });
});
