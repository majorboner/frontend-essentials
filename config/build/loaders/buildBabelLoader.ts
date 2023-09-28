export function buildBabelLoader(isDev: boolean) {
  return {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
        presets: ['@babel/preset-env'],
      },
    },
  };
}
