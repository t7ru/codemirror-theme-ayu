# codemirror-theme-ayu

[Ayu](https://ayutheme.com/) light and dark themes for [CodeMirror 6](https://codemirror.net/).

## Install

```bash
npm i codemirror-theme-ayu
```

## Usage

```ts
import { EditorView } from "@codemirror/view";
import { ayuLight, ayuDark } from "codemirror-theme-ayu";

new EditorView({
	extensions: [ayuDark], // or ayuLight
});
```

## License

[MIT](LICENSE)
