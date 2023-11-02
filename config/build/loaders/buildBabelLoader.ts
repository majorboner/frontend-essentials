import removePropsPlugin from '../../babel/removePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTSX: boolean;
}

export function buildBabelLoader({ isDev, isTSX }: BuildBabelLoaderProps) {
  return {
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          isDev && require.resolve('react-refresh/babel'),
          isTSX && !isDev && [removePropsPlugin,
            {
              props: ['data-testid'],
            }],
          [
            '@babel/plugin-transform-typescript',
            { isTSX },
          ],
          '@babel/plugin-transform-runtime',
        ].filter(Boolean),
        presets: ['@babel/preset-env'],
        cacheDirectory: true,
      },
    },
  };
}
