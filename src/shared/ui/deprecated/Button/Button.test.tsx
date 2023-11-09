/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import { Button, ButtonSize, ThemeButton } from './Button';

describe('Button', () => {
	test('Рендерится', async () => {
		render(<Button>Test</Button>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
	test('Дизейблится', async () => {
		render(<Button disabled>Disabled button</Button>);
		expect(screen.getByText('Disabled button')).toBeDisabled();
	});
	test('Тема background применяется', async () => {
		render(<Button theme={ThemeButton.BACKGROUND}>Background</Button>);
		expect(screen.getByText('Background')).toHaveClass('background');
	});
	test('Тема clear применяется', async () => {
		render(<Button theme={ThemeButton.CLEAR}>Clear</Button>);
		expect(screen.getByText('Clear')).toHaveClass('clear');
	});
	test('Тема outline применяется', async () => {
		render(<Button theme={ThemeButton.OUTLINE}>Outline</Button>);
		expect(screen.getByText('Outline')).toHaveClass('outline');
	});
	test('Параметр square применяется', async () => {
		render(
			<Button
				theme={ThemeButton.OUTLINE}
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
				theme={ThemeButton.OUTLINE}
				square
				size={ButtonSize.M}
			>
				SquaredSizeM
			</Button>,
		);
		expect(screen.getByText('SquaredSizeM')).toHaveClass('size-m');
		render(
			<Button
				theme={ThemeButton.OUTLINE}
				square
				size={ButtonSize.L}
			>
				SquaredSizeL
			</Button>,
		);
		expect(screen.getByText('SquaredSizeL')).toHaveClass('size-l');
		render(
			<Button
				theme={ThemeButton.OUTLINE}
				square
				size={ButtonSize.XL}
			>
				SquaredSizeXL
			</Button>,
		);
		expect(screen.getByText('SquaredSizeXL')).toHaveClass('size-xl');
	});
});
