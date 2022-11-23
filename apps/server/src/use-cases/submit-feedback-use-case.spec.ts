// import { describe, expect, it } from "vitest";
import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// vitest spies
const createFeedbackSpy = vitest.fn();
const sendMailSpy = vitest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit Feedback", () => {
  it("should submit a feedback", async () => {
    await expect(
      submitFeedback.run({
        type: "BUG",
        comment: "This is a comment",
        screenshot: "data:image/png;base64,example.com/screenshot.png",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should throw an error if type or comment is not provided", async () => {
    await expect(
      submitFeedback.run({
        type: "",
        comment: "",
      })
    ).rejects.toThrow("Type and comment are required");
  });

  it("should throw an error if screenshot is not a valid URL", async () => {
    await expect(
      submitFeedback.run({
        type: "IDEA",
        comment: "This is another comment",
        screenshot: "example.com/screenshot.png",
      })
    ).rejects.toThrow("Screenshot must be a valid URL");
  });
});
