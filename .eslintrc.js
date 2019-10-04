module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		jest: true
	},
	extends: [
		'xo'
	],
	rules: {
		'no-console': ['error', {allow: ['warn', 'error', 'info']}],
		'indent': ['error', 'tab', {
			'SwitchCase': 1,
			'CallExpression': { arguments: 'off' }
		}],
		'newline-before-return': 'error',
		'padding-line-between-statements': ['error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
		]
	}
};
