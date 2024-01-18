# Page Builder

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- <https://github.com/GrapesJS/react/tree/main/packages/grapesjs-react-app>
- <https://github.com/Ju99ernaut/grapesjs-tailwind/>
- <https://github.com/GrapesJS/grapesjs/issues/2170>
- <https://github.com/GrapesJS/grapesjs/blob/dev/src/selector_manager/model/Selector.ts#L194C37-L194C63> open PR to fix the `[] and .` arbitrary value to the selector section.
- <https://scottspence.com/posts/change-scrollbar-color-tailwind-css>

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Container `height` should be `h-[200px]` and width should be `w-full`. Container name change to `Box`.
- On layout, click on the ➕ button in the components panel popup and click to insert components.

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
