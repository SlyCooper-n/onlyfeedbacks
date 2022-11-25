import cors from "cors";
import express, { Express } from "express";
import { routes } from "./routes";

const app: Express = express();

const PORT = process.env.PORT || 3333;

// middlewares
app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(
    `\nServer started on port ${PORT}
    Open in the browser: ${
      process.env.NODE_ENV === "development"
        ? `http://localhost:${PORT}`
        : "https://onlyfeedbacks-production.up.railway.app/"
    }\n`
  );
});
