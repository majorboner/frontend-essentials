import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface CodeProps {
	className?: string;
	text: string;
}

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const Code = memo((props: CodeProps) => {
	const { className, text } = props;

	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.Code, {}, [className])}>
			<Button
				className={cls.copyBtn}
				theme={ThemeButton.CLEAR}
				onClick={onCopy}
			>
				<CopyIcon className={cls.copyIcon} />
			</Button>
			<code>{text}</code>
		</pre>
	);
});
