import cors from "cors";
import express, { Request, Response } from "express";
import { sampleProducts } from "./data";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://127.0.0.1:5173"],
  })
);

app.get("/api/products", (req: Request, res: Response) => {
  res.json(sampleProducts);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
