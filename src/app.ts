import express from "express";
import { Request, Response } from "express";
import productsRouter from "./routes/products.route";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/products", productsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
