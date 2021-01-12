module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array
    ],
    parser: 'babel-eslint', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    plugins: ['prettier', 'import'],
    rules: {
        'import/newline-after-import': ['error', { count: 2 }],
        'import/extensions': 'off',
        'no-case-declarations': 'off',
        'react/forbid-prop-types': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: [
                    'block',
                    'block-like',
                    'cjs-export',
                    'class',
                    'const',
                    'export',
                    'import',
                    'let',
                    'var',
                ],
            },
            {
                blankLine: 'always',
                prev: [
                    'block',
                    'block-like',
                    'cjs-export',
                    'class',
                    'const',
                    'export',
                    'import',
                    'let',
                    'var',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
            {
                blankLine: 'any',
                prev: ['export', 'import'],
                next: ['export', 'import'],
            },
        ],
    },
};
