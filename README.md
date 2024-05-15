# eslint-plugin-typename-in-mock

This ESLint plugin enforces the Rules of typename.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-typename-in-mock`:

```sh
npm install eslint-plugin-typename-in-mock --save-dev
```

## Usage

Add `typename-in-mock` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "typename-in-mock"
    ]
}
```



## Configurations

```
//.eslintrc.js
module.export = {
    ...
    overrides: [
        {
            files: [src/app/mocks/queries/*.js],
            rules: {
                'typename-in-mock/typename-in-mock': 'error',
            }
        }
    ]
}
```


