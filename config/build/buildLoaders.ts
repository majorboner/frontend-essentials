import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

  const cssLoader = buildCssLoader(options.isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
      loader:'@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true,
              }
            }
          ]
        }
      },
    },
  ],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    cssLoader,
  ];
}
