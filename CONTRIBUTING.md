# Contributing to semplaatsman.nl

First off, thank you for considering contributing to semplaatsman.nl! It's people like you that make
this project greater and greater. We welcome contributions from everyone, regardless of their
experience level.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Low Effort Contributions](#small-contributions)
  - [Medium Effort Contributions](#medium-contributions)
  - [High Effort Contributions](#big-contributions)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Requests](#pull-requests)
- [Style Guides](#style-guides)

## Code of Conduct

This project and everyone participating in it is governed by our
[Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.
Please report unacceptable behavior to [dev@semplaatsman.nl](mailto:dev@semplaatsman.nl).

## How Can I Contribute?

We've categorized contributions into different levels to help you find a task that matches your
available time and expertise. Some contributions need to be researched to determine if they would
provide a benefit. In general, advice and tips are always very welcome! We are still learning and
would love to hear your opinions and thoughts on this repository!

### Small Contributions

- **Sitemap generation**: Sitemap generation, with react-router and i18n integration. Currently,
  only a basic static sitemap is used.
- **Email reCaptcha**: reCaptcha for email. See
  [Adding CAPTCHA verification](https://www.emailjs.com/docs/user-guide/adding-captcha-verification/)
  from [EmailJS](https://www.emailjs.com/).
- **Lazy loading/FOUC**: Optimize lazy loading and FOUC (Flash Of Unstyled Content). This is
  currently primarily noticeable by the Suspense in [App.tsx](./src/App.tsx).
- **Config supplementation**: Supplement the [config](./src/config) directory with configuration
  variables. Currently the configuration setup contains basic user and application information, but
  misses functionalities such as features (e.g. enable light and/or dark theme, enable Auto-Reply,
  etc...).
- **Centralized GitHub Pages hosting**: Research the steps needed to host without a custom domain,
  but through a GitHub Pages domain.
- **Language-specific config values**: Currently the configuration variables are only for
  non-langauge-specific values, this could possibly be put in the `common.json` or a new
  `config.json` file and be loaded in by i18n (maybe as global variables).
- **Config interface**: Add an interface for the config in [config.ts](./src/config/config.ts).

### Medium Contributions

- **Error boundary**: Implement an error boundary with fallback error page.
- **Dockerization**: [Dockerize](https://www.docker.com/) the application.
- **404 page**: Research the benefit of, and implement a 404 page instead of rerouting to the root
  domain.
- **react-loading-skeleton principles**: Properly implement and adhere to the
  [principles of react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton#principles).
- **ProjectDetail extension**: Extend the current
  [ProjectDetail.tsx](./src/pages/ProjectDetail/ProjectDetail.tsx) component to showcase the project
  information at the side and/or top of the page (e.g. used technologies list, created date, link to
  the live url, link to the source code). This would most likely also need to be extended to provide
  an (automatically generated) table of contents.
- **Project description components**: Develop components that can be used to create project
  descriptions. Some examples are:
  - Code block component built with
    [Prism](https://prismjs.com/)/[react-syntax-highlighter](https://www.npmjs.com/package/react-syntax-highlighter).
    Also see the
    [Prism Theme Generator](https://k88hudson.github.io/syntax-highlighting-theme-generator/www/).
  - Table component.
  - Graph component.
  - Chart component.
  - feel free to add any othr ideas...
- **Color scheme improvements**: Currently, the yellow-orange and black color scheme works great for
  dark mode, but brings accessibility issues when switching to light mode, mainly due to contrast
  issues. Switching from yellow-orange to, for example, blue or purple could provide better contrast
  between light and dark mode. The light cream color that is currently being used for light mode
  could still be used, since it provides a more visually friendly alternative to plain white.

### Big Contributions

- **Next.js**: Create an alternate version using [Next.js](https://nextjs.org/), and hosted on
  [Netlify](https://www.netlify.com/). This would provide better performance, SSR, and SEO, and will
  also make an MDX-based project description setup possible.
- **Google Analytics**: Research the benefit of, and integrate Google Analytics (possibly through
  [react-ga](https://www.npmjs.com/package/react-ga)).
- **Pre-renderer**: Implement a pre-renderer or similar alternative to improve SEO and enable static
  crawlers to crawl the website. Some possible solutions are:
  [react-snap](https://www.npmjs.com/package/react-snap), [prerender.io](https://prerender.io/), and
  [Cloudflare Workers](https://workers.cloudflare.com/).
- **Testing**: Implement tests. Feel free to choose your own testing framework, but carefully
  consider which testing framework would suit this project. See also [Vitest](https://vitest.dev/)

Please also check our [Issues](https://github.com/SemPlaatsman/semplaatsman.nl/issues) page for
further contributions.

## Reporting Bugs

Before creating bug reports, please check the existing issues as you might find that you don't need
to create one. When you are creating a bug report, please include as many details as possible.

## Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Before creating enhancement suggestions,
please check the existing issues as you might find that you don't need to create one.

## Pull Requests

1. Fork the repo and create your branch from `development`.
2. Optionally, if you've added code that should be tested, add tests.
3. Update the documentation.
4. Ensure the linting, tests, and building passes.
5. Issue that pull request!

## Style Guides

### JavaScript Style Guide

We use ESLint and [Prettier](vscode:extension/esbenp.prettier-vscode) to enforce a consistent coding
style. Please ensure your contributions adhere to these standards by installing Prettier running:

```bash
npm run lint
npm run lint:fix
```

### Documentation Style Guide

- Use [Markdown](https://daringfireball.net/projects/markdown/) for documentation.
- Reference function names, variables, and filenames using backticks: `someFunction()`.

Thank you for contributing to semplaatsman.nl!
