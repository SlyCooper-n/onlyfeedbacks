import { MailAdapter } from "@/adapters";
import { FeedbacksRepository } from "@/repositories";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) {}

  async run(request: SubmitFeedbackUseCaseRequest): Promise<void> {
    const { type, comment, screenshot } = request;

    /*
    ! WRONG WAY TO DO IT, not following the SOLID principles

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

    await prismaFeedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    const nodemailerMailAdapter = new NodemailerMailAdapter();

    await nodemailerMailAdapter.sendMail({
      subject: "Feedback received",
      body: [].join("\n"),
    })
    */

    // * RIGHT WAY TO DO IT, following the SOLID principles

    if (!type || !comment) {
      throw new Error("Type and comment are required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64,")) {
      throw new Error("Screenshot must be a valid URL");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Feedback received",
      body: [
        `<html>`,
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p><b>Feedback Type</b>: ${type}</p>`,
        `<p><b>Comment</b>: ${comment}</p>`,
        screenshot &&
          `<img src="${screenshot}" alt="Screenshot" style="width: 90%; max-width: 400px; display: block;" />`,
        screenshot &&
          `<a href="${screenshot}">Click here if you can not see the image</a>`,
        `</div>`,
        `</html>`,
      ].join("\n"),
      textBody: [`Feedback Type: ${type}`, `Comment: ${comment}`].join("\n"),
    });
  }
}
