# @yupma/ui-kit Contribution guideline
 
- You can generate component using `ng g c component-name`
- Now update styles and components as you wish
- Then add it in export of `ui-kit.module.ts`
- Then export it in `public-api.ts`

- Now go to `projects` folder in terminal
- Run command `ng build ui-kit`
- Now go to `ui-kit-demo/dist/ui-kit`
- Run command `npm publish` or `npm pack` to test