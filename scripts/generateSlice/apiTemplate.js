module.exports = (componentName) => `export { ${componentName} } from './ui/${componentName}/${componentName}';

export type { ${componentName}Schema } from './model/types/${componentName[0].toLowerCase() + componentName.slice(1)}Schema';
`;
