import { render, route, layout } from "rwsdk/router";
import { defineApp } from "rwsdk/worker";

import { Document } from "@/app/Document";
import { setCommonHeaders } from "@/app/headers";
import { Home } from "@/app/pages/Home";
import { About } from "@/app/pages/About";
import { AppLayout } from "@/app/layouts/AppLayout";
import { Contact } from "./app/pages/Contact";

export type AppContext = {};

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // setup ctx here
    ctx;
  },
  render(Document, [
    layout(AppLayout, [
      route("/", Home),
      route("/about", About),
      route("/contact", Contact),
    ]),
  ]),
]);
