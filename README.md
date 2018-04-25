# Prettier Demo

The purposes of this repo are two-fold:

1. Show some code samples that highlight the usefulness of Prettier.
2. Provide an example Prettier setup.

## Setup

The setup in the package.json is very minimal and focuses exclusively on prettier. Here are the highlights:

```json
  "scripts": {
    "prettier-all": "prettier --single-quote --write '**/{*.js,*.jsx}'",
    "lint-staged": "lint-staged"
  },

  "lint-staged": {
    "**/{*.js,*.jsx}": [
      "prettier --single-quote --write",
      "git add"
    ]
  },

  "pre-commit": [
    "lint-staged"
  ],

  "devDependencies": {
    "lint-staged": "^7.0.4",
    "pre-commit": "^1.2.2",
    "prettier": "^1.12.1"
  }
```

First, install the dependencies with yarn or npm:

```bash
yarn add --dev lint-staged pre-commit prettier

or

npm install --save-dev lint-staged pre-commit prettier
```

Once those dependencies are installed, add the `scripts`, `lint-staged`, and `pre-commit` sections to your package.json by hand. You may need to tweak the regex (`"**/{*.js,*.jsx}"`) for your project structure.

### Usage

Run the `prettier-all` command (`yarn prettier-all` or `npm run prettier-all`) to run Prettier against the entire codebase. I highly recommend doing this when Prettier is first added to a project, as it will prevent whitespace diffs in all future PRs.

From there, the `lint-staged` command is run on all staged files when making a commit. This ensures that any subsequent changes are formatted with Prettier.
