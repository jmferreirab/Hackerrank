# VS Code tooling setup

0. Create project managed by npm

   npm init

1. Install linter\*

   npm -g install eslint

2. Create .eslintrc.json file

   eslint --initairbnb style is recommended

3. Install VsCode ESLINT, Prettier, Python and Error Lens extensions

4. Fix auto errors.

5. In case prettier is fighting ESLINT on quotes, use `"prettier.singleQuote": true`

6. Accept vscode prompt to install black formatter and pylint linter.
