import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: FeedbackCreateData): Promise<void> {
    await prisma.feedback.create({
      data: {
        ...data,
      },
    });
  }
}

export const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
