import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  rules: {
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
})
