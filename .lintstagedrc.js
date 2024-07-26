const path = require('path');

const buildEslintCommand = (filenames) =>
	`next lint --fix --file ${filenames
		.map((f) => path.relative(process.cwd(), f))
		.join(' --file ')}`;

module.exports = {
	'*.{ts,tsx}': [
		() => 'tsc --incremental false --noEmit', // 型チェック
		buildEslintCommand, // next lint
		"prettier --write --ignore-path .gitignore './**/*.{js,jsx,ts,tsx,json,css}'", // Prettierフォーマット
	],
};