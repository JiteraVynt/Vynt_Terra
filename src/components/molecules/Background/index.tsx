import assets from "@assets/index";
import Image from "next/image";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type BackgroundProps = DefaultPageProps & {
  className?: string;
  }

function Background (props: BackgroundProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Image sourceType='upload' className={styles.image_16} src={assets('1683536953306-png')} alt='Image16' /></div>);
}

export default Background;
