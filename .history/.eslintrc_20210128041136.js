{
  "name": "element-plus-admin",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vuedx-typecheck . && vite build",
    "test": "jest ./test",
    "eslint": "npx eslint . --ext .js,.jsx,.ts,.tsx",
    "stylelint": "npx stylelint **/*.{css,vue} --fix"
  },
  "dependencies": {
    "element-plus": "^1.0.1-beta.27",
    "vue": "^3.0.5"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.12.11",
    "@testing-library/jest-dom": "^5.11.8",
    "@types/jest": "^26.0.19",
    "@types/mockjs": "^1.0.3",
    "@types/node": "^14.14.20",
    "@types/nprogress": "^0.2.0",
    "@typescript-eslint/eslint-plugin": "^4.9.1",
    "@typescript-eslint/parser": "^4.9.1",
    "@vitejs/plugin-vue": "^1.1.0",
    "@vue/compiler-sfc": "^3.0.5",
    "@vue/test-utils": "^2.0.0-beta.13",
    "@vuedx/typecheck": "^0.6.0",
    "@vuedx/typescript-plugin-vue": "^0.6.0",
    "autoprefixer": "^10.1.0",
    "axios": "^0.21.1",
    "babel-jest": "^26.6.3",
    "eslint": "^7.15.0",
    "eslint-plugin-vue": "^7.2.0",
    "jest": "^26.6.3",
    "mockjs": "^1.1.0",
    "nprogress": "^0.2.0",
    "postcss": "^8.2.2",
    "postcss-import": "^14.0.0",
    "postcss-nested": "^5.0.3",
    "postcss-simple-vars": "^6.0.2",
    "stylelint": "^13.8.0",
    "stylelint-config-standard": "^20.0.0",
    "tailwindcss": "^2.0.2",
    "ts-jest": "^26.4.4",
    "typescript": "^4.1.3",
    "vite": "^2.0.0-beta.9",
    "vue-jest": "^5.0.0-alpha.7",
    "vue-router": "^4.0.0-rc.6",
    "vuex": "^4.0.0-rc.2"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 10"
  ]
}