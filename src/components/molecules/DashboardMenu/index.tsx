import DashboardMenuItem from "@components/molecules/DashboardMenuItem";
 import { useNavigateService } from "@services/navigate";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";

import styles from './index.module.css';

type DashboardMenuProps = DefaultPageProps & {
  className?: string;
  }

function DashboardMenu (props: DashboardMenuProps): JSX.Element {
  const navigation = useNavigateService()
  
  
  const handleOnClick = () => {
  navigation.navigate('/dashboard/terrariums')
}
  return (<div className={`${styles.molecule} ${props.className}`} ><div className={styles.box_2} ><DashboardMenuItem className={styles.dashboardnavbarmenuitem_1} onClick={handleOnClick} label={'Terrariums'} /></div></div>);
}

export default DashboardMenu;
