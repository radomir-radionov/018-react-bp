## Install App

`yarn install`  
`yarn start`

## Main Libraries

- [redux toolkit](https://redux-toolkit.js.org/) - state manadger
- [redux-saga](https://redux-saga.js.org/) - side effect manager
- [react hook form](https://react-hook-form.com/) - processing and validating form
- [styled-components](https://styled-components.com/) - styles

## Architecture

- **assets**
  - fonts
  - images
- **components** (**Components form modules.** This folder for components like a button, input, link and etc.)
  - ExampleComponent
    - ExampleComponent.tsx - main file
    - styles.ts - for styled-components
    - types.ts - for types
- **constants** (app's general constants)
- **modules** (**Modules form pages.** This folder for components like a form, header, footer and etc.)
  - ExampleModule
    - ExampleModule.tsx - main file
    - styles.ts - for styled-components
    - types.ts - for types
    - data.ts - for auxiliary functions
- **pages** (**Pages contain modules which in turn contain components**)
  - ExamplePage
    - ExamplePage.tsx - main file
    - styles.ts - for styled-components
- **redux**
  - module
    - slice.ts - actions and reducer
    - saga.ts
    - selectors.ts
- **requests** - contains requests and interceptors
- **routes**
- **store**
- **styles** - contains design tokents
  - breakpoints
  - colors
  - globalStyles
  - typography
- **utils** - contains support functions for example hooks and other
