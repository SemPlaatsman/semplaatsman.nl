# semplaatsman.nl

Welcome to the repository for semplaatsman.nl! This project showcases a modern, fully responsive
personal portfolio website built with React. It has built-in support for emails, multilinguality,
multiple themes, and free hosting.

![semplaatsman.nl Mockup](./docs/assets/about-mockup.webp)

<p align="center">
   <img src="./docs/assets/lighthouse-results.png" alt="semplaatsman.nl Lighthouse results" />
</p>

> 💡 The documentation for this project is still being worked on, so if you see any mistakes or
> missing pieces of information, be sure to let me know!

> 💡 This project draws significant inspiration from
> [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio).
> A heartfelt thank you to the original authors for their outstanding work, which served as a
> foundation for this portfolio. If you're looking for an HTML/CSS/JS alternative, please checkout
> their repository! For a full list of acknowledgments, please see the
> [Acknowledgements](#acknowledgements) section.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start Guide](#quick-start-guide)
- [Customization](#customization)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Demo

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">About</summary>

[![About mockup of semplaatsman.nl](./docs/assets/about-mockup.webp)](https://semplaatsman.nl/)

</details>

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">Resume</summary>

[![Resume mockup of semplaatsman.nl](./docs/assets/resume-mockup.png)](https://semplaatsman.nl/resume)

</details>

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">Projects</summary>

[![Projects mockup of semplaatsman.nl](./docs/assets/projects-mockup.png)](https://semplaatsman.nl/projects)

</details>

<details>
<summary style="font-size: 1.17em; font-weight: bold; margin: 0.5em 0;">Contact</summary>

[![Contact mockup of semplaatsman.nl](./docs/assets/contact-mockup.png)](https://semplaatsman.nl/contact)

</details>

Visit the live site: [semplaatsman.nl](https://semplaatsman.nl/)

## Features

- Fully responsive for all devices
- Component-based architecture for reusable and maintainable code
- Support for multiple themes
- Built-in multilingual support
- Excellent Google Lighthouse performance
- Multilingual email integration (also obfuscates your personal email address)
- Free hosting through GitHub Pages

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [reacti18next](https://react.i18next.com/)
- [React Router](https://reactrouter.com/en/main)
- [React Helmet](https://www.npmjs.com/package/react-helmet)
- [React Icons](https://react-icons.github.io/react-icons/)
- [ESLint](https://eslint.org/)
- [axe-core](https://www.npmjs.com/package/axe-core)
- [Prettier](https://prettier.io/)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/en) and npm (comes with
  Node.js)
- You have a Windows/Linux/Mac machine with [Git](https://git-scm.com/downloads) installed
- You have read [CONTRIBUTING.md](./CONTRIBUTING.md) (optional, if you're looking to contribute)

## Quick Start Guide

To get started with this project:

1. Installation:

   ```bash
   git clone https://github.com/SemPlaatsman/semplaatsman.nl.git
   cd semplaatsman.nl
   npm install
   ```

2. Configuration:

   - Copy [`.env.example`](./.env.example) to [`.env`](./.env) and update the values as needed

3. Running locally:

   ```bash
   npm run dev
   ```

## Customization

To customize to project for your own use:

1. Fork this repository to your GitHub account

2. Update configuration files in [`src/config/`](./src/config/)

3. Modify content in [`public/locales/`](./public/locales/)

4. Adjust styles in [`src/styles/_variables.scss`](./src/styles/_variables.scss)

5. Update personal information in various files (see
   [Configuration and Customization](https://github.com/SemPlaatsman/semplaatsman.nl/wiki/Configuration-and-Customization)
   in the wiki for details)

## Deployment

This project uses [GitHub Pages](https://pages.github.com/) for hosting, with
[Cloudflare](https://www.cloudflare.com/) for CDN and DNS management. The deployment process is
automated through [GitHub Actions](https://github.com/features/actions). When changes are merged to
the `main` branch, the application is automatically built and deployed.

For detailed setup instructions, refer to the
[Hosting and Deployment](https://github.com/SemPlaatsman/semplaatsman.nl/wiki/Hosting-and-Deployment)
section in the wiki.

## Documentation

For more detailed information about the project structure, architecture, and advanced customization
options, please refer to our [GitHub Wiki](https://github.com/SemPlaatsman/semplaatsman.nl/wiki).

## Contributing

We welcome contributions to this project! Please see our [Contributing Guidelines](CONTRIBUTING.md)
for more information on how to get started.

The `main` branch features the most recent deployed and stable code of this portfolio website, and
is hosted on [semplaatsman.nl](https://www.semplaatsman.nl).

The `development` branch is used for ongoing development work. All contributions should be merged
into development before being merged into main.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing or engaging in our
community.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Sem Plaatsman - [LinkedIn](https://www.linkedin.com/in/sem-plaatsman/) -
[dev@semplaatsman.nl](mailto:dev@semplaatsman.nl)

Project Link: [SemPlaatsman/semplaatsman.nl](https://github.com/SemPlaatsman/semplaatsman.nl)

## Acknowledgements

Mockups were generated through the
[Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php) from
[TechSini.com](https://techsini.com/).

This project is based on the work of [codewithsadee](https://github.com/codewithsadee). The
[original repository](https://github.com/codewithsadee/vcard-personal-portfolio) provided the
foundation and inspiration for this portfolio website. I express my gratitude for their excellent
work and for making it available under the [MIT license](https://opensource.org/license/mit).
