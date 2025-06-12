import React from 'react';
import styles from './css/index.module.scss';
import cn from 'classnames';

// --- ШАГ 1: Создаем компонент для одного элемента в info-блоке ---
type ItemProps = {
  icon: string;
  children: React.ReactNode;
};

const NotificationItem: React.FC<ItemProps> = ({ icon, children }) => {
  return (
    <div className={styles.infoItem}>
      <img src={icon} alt="info icon" className={styles.infoItemIcon} />
      <div className={styles.infoItemContent}>{children}</div>
    </div>
  );
};

// --- ШАГ 2: Модифицируем главный компонент Notification ---
type NotificationVariant = 'warning' | 'info';

type NotificationProps = {
  variant: NotificationVariant;
  children: React.ReactNode;
  icon?: string; // Этот пропс теперь используется ТОЛЬКО для варианта 'warning'
  className?: string;
};

// Главная функция компонента
const NotificationComponent: React.FC<NotificationProps> = ({
  variant,
  children,
  icon,
  className,
}) => {
  const notificationClasses = cn(
    styles.notification,
    styles[variant],
    className,
  );

  // Если это 'info' блок, он просто служит контейнером для `children`
  // (в которые мы будем передавать Notification.Item)
  if (variant === 'info') {
    return <div className={notificationClasses}>{children}</div>;
  }

  // Если это 'warning' блок, рендерим как раньше
  return (
    <div className={notificationClasses}>
      {icon && (
        <div className={styles.iconWrapper}>
          <img src={icon} alt="warning icon" />
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};

// --- ШАГ 3: Прикрепляем Item как свойство к основному компоненту ---
// Это позволяет нам использовать синтаксис <Notification.Item ... />
export const Notification = Object.assign(NotificationComponent, {
  Item: NotificationItem,
});
