const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
	plugins: [
		postcssPresetEnv({
			stage: 2,
			features: {
				'logical-properties-and-values': false,
				'prefers-color-scheme-query': false,
				'gap-properties': false,
				'nesting-rules': false,
				'custom-properties': false,
				'place-properties': false,
				'not-pseudo-class': false,
				'focus-visible-pseudo-class': false,
				'focus-within-pseudo-class': false,
				'color-functional-notation': false,
			},
		}),
	],
};
