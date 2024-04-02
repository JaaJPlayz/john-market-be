import express from "express";
import { Request, Response } from "express";
import productsRouter from "./routes/products.route";

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "I am alive and ready to work! 🚀" });
});

app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
