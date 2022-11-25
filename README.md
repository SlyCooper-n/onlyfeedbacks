<div align="center">

# OnlyFeedbacks

[![Github](https://img.shields.io/badge/Gabe%20Frasz-OnlyFeedbacks-gold?style=flat-square)](https://github.com/SlyCooper-n)
[![Github issues](https://img.shields.io/github/issues/SlyCooper-n/onlyfeedbacks?color=red&style=flat-square)](https://github.com/SlyCooper-n/onlyfeedbacks/issues)
[![GitHub license](https://img.shields.io/github/license/SlyCooper-n/onlyfeedbacks?color=green&style=flat-square)](https://github.com/SlyCooper-n/onlyfeedbacks/blob/main/LICENSE)
![Github commit](https://img.shields.io/github/last-commit/SlyCooper-n/onlyfeedbacks?color=blue&style=flat-square)
[![Github](https://img.shields.io/badge/-Rockeseat-purple?style=flat-square)](https://github.com/Rocketseat)

</div>

<br />

> Project built together with Rockeseat

<div align="center"><img alt="Feedback Widget working" src="./.github/feedback-widget-opening.gif" /></div>

## :pushpin: About

This project was developed together with [Rocketseat](https://github.com/Rocketseat), [Diego Fernandes](https://github.com/diego3g) and [Rodrigo Gonçalves](https://github.com/rodrigorgtic) in NLW #8 in order to practise web development using Node.js and Prisma to manage databases. The most exciting thing I did during the process was the server side with Express and database stuff with Prisma. I also learned a bit about SOLID principles, unit testing (where I prefer to use Vitest instead of Jest) and external APIs such as Mailtrap to handle email shipping. This little feature will be used as a model to build on other apps.

> For more information about my dev journey, consider visiting my [LinkedIn](https://linkedin.com/in/gabriel-vs-frasao).

## :hammer: Main tools and libs used

<details>
<summary>
Base tools
</summary>

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)

</details>

<details>
<summary>
Styling
</summary>

- [Tailwind CSS](https://tailwindcss.com/)
- [Phosphor Icons](https://phosphoricons.com/)

</details>

<details>
<summary>
Linters and Formatters
</summary>

- [Prettier](https://prettier.io/)
- [.editorConfig](https://editorconfig.org/)

</details>

## :sparkles: Features

- [x] Send and receive feedbacks
- [x] Save feedbacks data on any database
- [x] Automatic email sending on new feedback

## :rocket: Running this project

**Clone on your machine** (I personally use Github CLI)

```bash
# by git
git clone https://github.com/SlyCooper-n/onlyfeedbacks.git

# or by Github CLI
gh repo clone SlyCooper-n/onlyfeedbacks
```

**Set every thing up**

```bash
# enter the project folder
cd onlyfeedbacks

# install dependencies
npm install

# run on development mode
npm run dev
```

## :brain: Thinking of contributing to the project?

Clone the repo as shown above :arrow_up: and follow [this little guide](https://github.com/SlyCooper-n/onlyfeedbacks/blob/main/.github/CONTRIBUTING.md)

## :desktop_computer: Deploy

The `server/` directory was deployed on [Railway](https://railway.app/) with this domain name: <https://onlyfeedbacks-production.up.railway.app/>

### Routes

Its only route at the moment is:

- /feedbacks (POST)

  - ```ts
    // feedbacks route accepts this content on the body request
    {
      type: "BUG" | "IDEA" | "OTHER",
      comment: string,
      screenshot?: string, // screenshot format should be: "data:image/png;base64," + <base64_image>
    }
    ```

## :memo: License

[MIT License](https://github.com/SlyCooper-n/onlyfeedbacks/blob/main/LICENSE) &copy; [Gabriel VS Frasão](https://github.com/SlyCooper-n)
