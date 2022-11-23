// import { nodemailerMailAdapter } from "@/adapters/nodemailer";
// import { prismaFeedbacksRepository } from "@/repositories/prisma";
// import { SubmitFeedbackUseCase } from "@/use-cases";
import express, { Request, Response } from "express";
import { nodemailerMailAdapter } from "./adapters/nodemailer";
import { prismaFeedbacksRepository } from "./repositories/prisma";
import { SubmitFeedbackUseCase } from "./use-cases";

export const routes = express.Router();

routes.post("/feedbacks", async (req: Request, res: Response) => {
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.run(req.body);

  return res.status(201).json({ message: "Feedback received" });
});
