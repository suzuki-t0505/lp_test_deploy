# React + Vite

<details>
<summary>React + Vite</summary>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
</details>

## セットアップ

```bash
git clone git@github.com:yuki-thewaggle/LP_LeadershipTraining_alpha_a.git
cd LP_LeadershipTraining_alpha_a
npm i
npm run dev
```

[http://localhost:5173/](http://localhost:5173/)

## Dockerを使用したセットアップの場合

```bash
git clone git@github.com:yuki-thewaggle/LP_LeadershipTraining_alpha_a.git
cd LP_LeadershipTraining_alpha_a
docker compse run --rm web npm i
docker compse up -d
```

[http://localhost:5173/](http://localhost:5173/)

## スライドの追加方法

1. `./src/components`に`jsx`ファイルを作成します。
2. 作成した`jsx`ファイルにテンプレートを記述します。以下は例です。
  ```jsx
  export const PageA = () => (
    <div className='min-w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 p-6 md:p-8 lg:p-12'>
      <div className="max-w-sm md:max-w-2xl text-center text-white space-y-6 animate-fade-in px-4 md:px-0">
        <div className="text-7xl mb-8 animate-bounce-slow">🚀</div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          未来を創造する
        </h1>
        <h2 className="text-sm md:text-2xl font-light mb-6 opacity-90">
          革新的なソリューション
        </h2>
        <p className="text-sm md:text-base opacity-80 max-w-lg mx-auto leading-relaxed">
          テクノロジーとクリエイティビティの融合で、ビジネスの可能性を広げます
        </p>
      </div>
    </div>
  );
  ```
3. `./src/App.jsx`で作成した`jsx`ファイルのコンポーネントを読み込ませます。以下は例です。
  ```diff
  ...（省略）

  // ここに作成したページのコンポーネントを読み込む
+  import { PageA } from './components/PageA';


  const App = () => {
    const slides = [
+      <PageA />,
    ]
    

    ...（省略）
  };

  export default App;
  ```

## ページタイトル&ファビコンの変更方法

ページタイトル、ファビコンを変更する場合は`./index.html`を変更します。

```diff
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
-    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
+    <link rel="icon" type="image/svg+xml" href="新しいファビコンのパス" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>my-swipe-lp</title>
+    <title>新しいページタイトル</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
