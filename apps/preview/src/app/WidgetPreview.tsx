"use client";

import * as Widget from "@onlys/feedbacks";
import {
  FeedbackTab,
  HideButton,
  ReturnHomeButton,
} from "@onlys/feedbacks/dist/components";
import {
  ArrowSquareOut,
  ChatTeardropDots,
  PaperPlaneRight,
  X,
} from "phosphor-react";

export const WidgetPreview = () => {
  return (
    <Widget.Root>
      <Widget.Content>
        <Widget.TabList>
          <header className="flex justify-center rounded-t-2xl bg-sky-500 py-4">
            <span>Hello, there!</span>
          </header>

          <div className="p-4">
            <Widget.TabTrigger value="feedback">
              <ChatTeardropDots weight="fill" className="fill-sky-500" />
              Send us a feedback
            </Widget.TabTrigger>

            <Widget.TabTrigger value="chat">
              <PaperPlaneRight weight="fill" className="fill-sky-500" />
              Chat with us
            </Widget.TabTrigger>

            <Widget.Link href="https://github.com/gabe-frasz" target="_blank">
              <ArrowSquareOut weight="bold" />
              My profile on GitHub!
            </Widget.Link>

            <HideButton />
          </div>
        </Widget.TabList>

        <Widget.TabContent value="feedback">
          <FeedbackTab
            feedbacks={[
              {
                type: "aitoma",
                title: "Aitoma",
                image: {
                  src: "/next.svg",
                  alt: "Next.js",
                },
                inputPlaceholder: "What's your name?",
              },
              {
                type: "xablau",
                title: "Xablau",
                image: {
                  src: "/vercel.svg",
                  alt: "Vercel",
                },
                inputPlaceholder: "What's your name?",
              },
              {
                type: "esqueça",
                title: "Esqueça",
                image: {
                  src: "/next.svg",
                  alt: "Next.js",
                },
                inputPlaceholder: "What's your name?",
              },
              {
                type: "xablau dnv",
                title: "Xablau dnv",
                image: {
                  src: "/vercel.svg",
                  alt: "Vercel",
                },
                inputPlaceholder: "What's your name?",
              },
              {
                type: "ai-caliquinha",
                title: "Ai caliquinha",
                image: {
                  src: "/next.svg",
                  alt: "Next.js",
                },
                inputPlaceholder: "What's your name?",
              },
            ]}
            serverEndpoint="http://localhost:3000/api/feedbacks"
          />
        </Widget.TabContent>

        <Widget.TabContent value="chat">
          <ReturnHomeButton />
          Um chat vei
        </Widget.TabContent>
      </Widget.Content>

      <Widget.Button>
        <span className="hidden items-center overflow-hidden group-data-[state=closed]:flex">
          <ChatTeardropDots weight="bold" className="h-6 w-6" />

          <span className="max-w-0 font-semibold transition-all duration-500 ease-linear group-hover:max-w-xs group-focus-visible:max-w-xs">
            <span className="pl-3" />
            Feedback
          </span>
        </span>

        <span className="hidden items-center overflow-hidden group-data-[state=open]:flex">
          <X weight="bold" className="h-6 w-6" />

          <span className="max-w-0 font-semibold transition-all duration-500 ease-linear group-hover:max-w-xs group-focus-visible:max-w-xs">
            <span className="pl-3" />
            Close
          </span>
        </span>
      </Widget.Button>
    </Widget.Root>
  );
};
