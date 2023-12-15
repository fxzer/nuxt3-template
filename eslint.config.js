import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    ignores: ['**/*.svg'],
    /** 覆盖 antfu/eslint-config  原本规则 */
    rules: {
      'no-console': 'off',
    },
  },
)
