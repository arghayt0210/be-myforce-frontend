module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'error',
    'react/prop-types': 'error',
    'react/jsx-boolean-value': 'error',
  },
  ignorePatterns: [
    'node_modules/**/*',
    '.next/**/*',
    'out/**/*',
    'build/**/*',
    'dist/**/*'
  ]
}; 