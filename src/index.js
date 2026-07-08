import { tags as t } from "@lezer/highlight";
import { createTheme } from "./makeTheme.js";
import * as light from "./colors/light.js";
import * as dark from "./colors/dark.js";

function ayuTheme({ editor, syntax }, variant) {
	const styles = [
		{ tag: t.comment, color: syntax.comment, fontStyle: "italic" },
		{ tag: t.string, color: syntax.string },
		{ tag: t.regexp, color: syntax.regexp },
		{ tag: [t.number, t.bool, t.null], color: syntax.accent },
		{ tag: t.propertyName, color: syntax.markup },
		{ tag: t.function(t.definition(t.variableName)), color: syntax.func },
		{
			tag: [t.definition(t.propertyName), t.local(t.variableName)],
			color: syntax.constant,
		},
		{
			tag: [t.definitionKeyword, t.modifier, t.keyword],
			color: syntax.keyword,
		},
		{ tag: t.special(t.brace), color: syntax.keyword },
		{ tag: [t.operator, t.derefOperator], color: syntax.operator },
		{ tag: t.separator, color: syntax.separator },
		{ tag: t.function(t.variableName), color: syntax.func },
		{ tag: [t.className, t.definition(t.typeName)], color: syntax.entity },
		{
			tag: [t.tagName, t.typeName, t.labelName, t.self],
			color: syntax.tag,
		},
		{ tag: t.angleBracket, color: syntax.tagBracket },
		{ tag: t.attributeName, color: syntax.func },
		{ tag: [t.meta, t.annotation], color: syntax.special },
		{ tag: t.invalid, color: syntax.invalid },
	];

	return createTheme({ variant, settings: editor, styles });
}

export const ayuLight = ayuTheme(light, "light");
export const ayuDark = ayuTheme(dark, "dark");
