module.exports = (componentName) => `import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './${componentName}.module.scss';

interface ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { t } = useTranslation();
  const { className } = props;
  return (
    <div className={classNames(cls.${componentName}, {}, [className])}>
      {t('${componentName}')}
    </div>
  );
});
`;
