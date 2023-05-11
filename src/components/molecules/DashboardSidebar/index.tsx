import DashboardMenuItem from '@components/molecules/DashboardMenuItem';
import { useNavigateService } from '@services/navigate';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DashboardSidebarProps = DefaultPageProps & {
  className?: string;
};

function DashboardSidebar(props: DashboardSidebarProps): JSX.Element {
  const navigation = useNavigateService();

  const handleOnClickTerrariums = () => {
    navigation.navigate('/dashboard/terrariums');
  };
  const handleOnClickUsers = () => {
    navigation.navigate('/dashboard/users');
  };
  return (
    <div className={`${styles.molecule} ${props.className}`}>
      <div className={styles.box_2}>
        <DashboardMenuItem
          className={styles.dashboardmenuitem_1}
          onClick={handleOnClickTerrariums}
          label={'Terrariums'}
        />
      </div>
      <div className={styles.box_2}>
        <DashboardMenuItem
          className={styles.dashboardmenuitem_1}
          onClick={handleOnClickUsers}
          label={'Users'}
        />
      </div>
    </div>
  );
}

export default DashboardSidebar;
