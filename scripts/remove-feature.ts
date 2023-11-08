import { Node, Project, SourceFile, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // isArticle
const featureState = process.argv[3]; // off\on

if (!removedFeatureName) {
	throw new Error('Укажите фича-флаг');
}

if (!featureState) {
	throw new Error('Укажите состояние фичи (on|off)');
}

if (featureState !== 'on' && featureState !== 'off') {
	throw new Error('Некорректное значение состояния фичи (on|off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.tsx');
project.addSourceFilesAtPaths('src/**/*.ts');

const files = project.getSourceFiles();

function isToggleFunction(node: Node): boolean {
	let isToggleFeatures = false;
	node.forEachChild((child) => {
		if (
			child.isKind(SyntaxKind.Identifier) &&
			child.getText() === 'toggleFeatures'
		) {
			isToggleFeatures = true;
		}
	});
	return isToggleFeatures;
}

files.forEach((sourceFile: SourceFile) => {
	sourceFile.forEachDescendant((node) => {
		if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
			const objectOptions = node.getFirstDescendantByKind(
				SyntaxKind.ObjectLiteralExpression,
			);

			if (!objectOptions) {
				return;
			}

			const featureNameProperty = objectOptions.getProperty('name');

			const onFunctionProperty = objectOptions.getProperty('on');
			const offFunctionProperty = objectOptions.getProperty('off');

			const onFunction = onFunctionProperty?.getFirstDescendantByKind(
				SyntaxKind.ArrowFunction,
			);
			const offFunction = offFunctionProperty?.getFirstDescendantByKind(
				SyntaxKind.ArrowFunction,
			);
			const featureName = featureNameProperty
				?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
				?.getText()
				.slice(1, -1);
			if (featureName !== removedFeatureName) {
				return;
			}
			if (featureState === 'on') {
				node.replaceWithText(onFunction?.getBody().getText() ?? '');
			}
			if (featureState === 'off') {
				node.replaceWithText(offFunction?.getBody().getText() ?? '');
			}
		}
	});
});

project.save();
