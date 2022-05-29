import { Server } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    environment,
    routes() {},
  });
}
