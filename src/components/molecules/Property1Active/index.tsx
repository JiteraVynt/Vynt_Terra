import { Text } from "@components/atoms/Text";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type Property1ActiveProps = DefaultPageProps & {
  className?: string;
  }

function Property1Active (props: Property1ActiveProps): JSX.Element {
  
  
  
  
  return (<div className={`${styles.page_container} ${props.className}`} ><Text textType='Text' className={styles.text_12} >{'Button'}</Text></div>);
}

export default Property1Active;
