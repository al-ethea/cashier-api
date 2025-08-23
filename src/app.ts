import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
} from "express";
import cors from "cors";
import { PORT } from "./config";
// import { SampleRouter } from "./routers/sample.router";
import { AppError } from "./utils/app.error";
import authRouter from "./routers/auth.router";
import shiftRouter from "./routers/shift.router";
import cloudinaryRouter from "./routers/cloudinary.router";
import productRouter from "./routers/product.router";
import cartRouter from "./routers/cart.router";
import transactionRouter from "./routers/transaction.router";
import cashierRouter from "./routers/cashier.router";
import reportRouter from "./routers/report.router";

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    /*
      📒 Docs:
      This is a not found error handler.
    */
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes("/api/")) {
        res
          .status(404)
          .send(
            "We are sorry, the endpoint you are trying to access could not be found on this server. Please ensure the URL is correct!"
          );
      } else {
        next();
      }
    });

    /*
        📒 Docs:
        This is a centralized error-handling middleware.
        🛠️ Note: Remove the console line below before deploying to production.
    */
    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        const statusCode =
          error.statusCode ||
          (error.name === "TokenExpiredError" ||
          error.name === "JsonWebTokenError"
            ? 401
            : 500);
        const message =
          error instanceof AppError || error.isOperational
            ? error.message ||
              error.name === "TokenExpiredError" ||
              error.name === "JsonWebTokenError"
            : "Internal server error. Please try again later!";
        if (req.path.includes("/api/")) {
          res.status(statusCode).json({
            success: false,
            message: message,
          });
        } else {
          next();
        }
      }
    );
  }

  private routes(): void {
    // const sampleRouter = new SampleRouter();

    this.app.get("/api", (req: Request, res: Response) => {
      res.send(
        `Hello, Purwadhika student 👋. Have fun working on your mini project ☺️`
      );
    });

    // this.app.use("/api/samples", sampleRouter.getRouter());
    this.app.use("/api/cloudinary", cloudinaryRouter);
    this.app.use("/api/auth", authRouter);
    this.app.use("/api/shift", shiftRouter);
    this.app.use("/api/products", productRouter);
    this.app.use("/api/cart", cartRouter);
    this.app.use("/api/transactions", transactionRouter);
    this.app.use("/api/cashier", cashierRouter);
    this.app.use('/api/reports', reportRouter)
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`➜ [API] Local: http://localhost:${PORT}/`);
    });
  }
}
