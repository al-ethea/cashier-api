import { Router } from "express";
import transactionReportHandlerRouter from "../middlewares/transactionReportHandlerRouter";

const reportRouter = Router()

reportRouter.get('/transactions/all',transactionReportHandlerRouter)

export default reportRouter