import DefaultFooterMenu from "@components/molecules/DefaultFooterMenu";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type DefaultFooterProps = DefaultPageProps & {
  className?: string;
  btn_prop: string;
onPress: () => void;
}

function DefaultFooter (props: DefaultFooterProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.footer_molecule_0} ${props.className}`} ><div className={styles.footer_molecule_box_0} ><div className={styles.footer_molecule_box_1} ><div className={styles.footer_molecule_box_2} />
<DefaultFooterMenu className={styles.defaultfootermenu_1} /></div></div></div>);
}

export default DefaultFooter;
