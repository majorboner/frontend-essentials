/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	test('Рендерится', async () => {
		render(<Button>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
	test('Дизейблится', async () => {
		render(<Button disabled>Disabled button</Button>);
		expect(screen.getByText('Disabled button')).toBeDisabled();
	});
	test('Тема clear применяется', async () => {
		render(<Button variant="clear">Clear</Button>);
		expect(screen.getByText('Clear')).toHaveClass('clear');
	});
	test('Тема outline применяется', async () => {
		render(<Button variant="outline">Outline</Button>);
		expect(screen.getByText('Outline')).toHaveClass('outline');
	});
	test('Параметр square применяется', async () => {
		render(
			<Button
				variant="outline"
				square
			>
				Squared
			</Button>,
		);
		expect(screen.getByText('Squared')).toHaveClass('square');
	});
	test('Размеры применяются', async () => {
		render(
			<Button
				variant="outline"
				square
				size="size-m"
			>
				SquaredSizeM
			</Button>,
		);
		expect(screen.getByText('SquaredSizeM')).toHaveClass('size-m');
		render(
			<Button
				variant="outline"
				square
				size="size-l"
			>
				SquaredSizeL
			</Button>,
		);
		expect(screen.getByText('SquaredSizeL')).toHaveClass('size-l');
		render(
			<Button
				variant="outline"
				square
				size="size-xl"
			>
				SquaredSizeXL
			</Button>,
		);
		expect(screen.getByText('SquaredSizeXL')).toHaveClass('size-xl');
	});
});
