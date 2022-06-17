import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCard from "./MovieCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/MovieCard",
  component: MovieCard,
} as ComponentMeta<typeof MovieCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const MovieCardNormal = Template.bind({});

MovieCardNormal.args = {
  videoId: "XkpRo8smQ5M",
  title: "Spider man",
  sharedName: "Xuka",
  voteUpCount: "16",
  voteDownCount: "20",
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
};
