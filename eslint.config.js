import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
})
