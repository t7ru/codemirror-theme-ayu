import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { EditorView } from "@codemirror/view";

export function createTheme({ variant, settings, styles }) {
	const theme = EditorView.theme(
		{
			"&": {
				backgroundColor: settings.background,
				color: settings.foreground,
			},
			".cm-content": { caretColor: settings.caret },
			".cm-cursor, .cm-dropCursor": { borderLeftColor: settings.caret },
			".cm-selectionBackground": { backgroundColor: settings.selection },
			"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, ::selection":
				{ backgroundColor: settings.selectionActive },
			".cm-activeLine": { backgroundColor: settings.lineHighlight },
			".cm-gutters": {
				backgroundColor: settings.background,
				color: settings.gutterForeground,
			},
			".cm-activeLineGutter": {
				backgroundColor: settings.lineHighlight,
				color: settings.gutterHighlight,
			},
			".cm-searchMatch": {
				backgroundColor: "transparent",
				borderRadius: "2px",
				boxShadow: `0 0 0 .5px ${settings.searchMatch}`,
			},
			".cm-searchMatch-selected": {
				backgroundColor: settings.searchMatch,
			},
			".cm-selectionMatch": {
				backgroundColor: "transparent",
				borderRadius: "2px",
				boxShadow: `0 0 0 .5px ${settings.selectionMatch}`,
			},
		},
		{ dark: variant === "dark" },
	);

	return [theme, syntaxHighlighting(HighlightStyle.define(styles))];
}
