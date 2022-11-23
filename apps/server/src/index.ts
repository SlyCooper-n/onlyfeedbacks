import cors from "cors";
import express, { Express } from "express";
import { routes } from "./routes";

const app: Express = express();

const port = process.env.PORT || 3333;

// middleware
app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(
    `\nServer started on port ${port}
    Open in the browser: ${
      process.env.NODE_ENV === "development"
        ? "http://localhost:" + port
        : "https://feedback-widget-nlw08-production.up.railway.app/"
    }\n`
  );
});
