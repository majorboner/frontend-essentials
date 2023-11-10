import { ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import cls from './Modal.module.scss';
import { Portal } from '../../redesigned/Portal/Portal';
import { Overlay } from '../../redesigned/Overlay/Overlay';

interface ModalProps {
	className?: string;
	children?: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const animationDelay = 200;

/**
 * Устарело, используем новые компоненты из папки redesigned!
 * @deprecated
 */

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose, lazy } = props;

	const { close, isClosing, isMounted } = useModal({
		animationDelay,
		onClose,
		isOpen,
	});

	const { theme } = useTheme();

	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div
				className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
			>
				<Overlay onClick={close} />
				<div className={cls.content}>{children}</div>
			</div>
		</Portal>
	);
};
