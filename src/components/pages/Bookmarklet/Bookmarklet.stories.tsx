import React from "react";
import { storiesOf } from "@storybook/react";
//@ts-ignore
import StoryRouter from "storybook-react-router"; // ignore type error
import Bookmarklet from "./Bookmarklet";

// obsolete way of adding stories is used due to 'StoryRouter'.
storiesOf("Pages/Bookmarklet", module)
  .addDecorator(StoryRouter())
  .add("Default", () => <Bookmarklet />);
