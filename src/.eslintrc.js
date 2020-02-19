module.exports = {
	env: { browser: true },
	parser: 'babel-eslint',
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:react/recommended',
	],
	settings: {
		react: { version: 'detect' },
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		'react/sort-comp': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
		'react/jsx-closing-tag-location': 'warn',
		'react/jsx-first-prop-new-line': ['warn', 'multiline'],
		'react/jsx-no-bind': 'warn',
		'react-hooks/rules-of-hooks': 'warn',
		'react-hooks/exhaustive-deps': 'warn',
	},
}
