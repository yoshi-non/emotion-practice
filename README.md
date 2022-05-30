# 作成方法
yarn create next-app --typescript

# 起動方法
yarn dev

# emotionを追加
yarn add @emotion/react

# tsconfig.jsonにjsxImportSourceパラメーターを追加する。
{
  "compilerOptions": {
    "jsxImportSource": "@emotion/react"
  }
}

# babelプラグインを追加
yarn add -D @emotion/babel-plugin

# .babelrcを作成して下記内容を記載する。
{
  "presets": [
    [
      "next/babel",
      {
        "preset-react": {
          "runtime": "automatic",
          "importSource": "@emotion/react"
        }
      }
    ]
  ],
  "plugins": ["@emotion/babel-plugin"]
}

# MUIアイコンの追加
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material
