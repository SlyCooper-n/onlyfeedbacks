import * as Widget from "@onlys/feedbacks"
import "@onlys/feedbacks/dist/base.css"

export default function Home() {
  return (
    <div>
      <Widget.Root
        feedbacks={[
          {
            type: "aitoma",
            title: "Aitoma",
            image: {
              src: "/next.svg",
              alt: "Next.js"
            },
            inputPlaceholder: "What's your name?",
          },
          {
              type: "xablau",
              title: "Xablau",
              image: {
                src: "/vercel.svg",
                alt: "Vercel"
              },
              inputPlaceholder: "What's your name?",
          },
          {
            type: "esqueça",
            title: "Esqueça",
            image: {
              src: "/next.svg",
              alt: "Next.js"
            },
            inputPlaceholder: "What's your name?",
          },
          {
            type: "xablau dnv",
            title: "Xablau dnv",
            image: {
              src: "/vercel.svg",
              alt: "Vercel"
            },
            inputPlaceholder: "What's your name?",
          },
          {
            type: "ai-caliquinha",
            title: "Ai caliquinha",
            image: {
              src: "/next.svg",
              alt: "Next.js"
            },
            inputPlaceholder: "What's your name?",
          },
        ]}
        serverEndpoint="http://localhost:3333/feedbacks"
        actions={[
          {
            flow: "aham",
            label: "Aham",
            component: <div>AHAAAAAMM</div>
          }
        ]}
      >
        <Widget.Content>
          <Widget.Link href="https://github.com/gabe-frasz" target="_blank">aitoma</Widget.Link>
        </Widget.Content>

        <Widget.Button />
      </Widget.Root>
    </div>
  )
}
