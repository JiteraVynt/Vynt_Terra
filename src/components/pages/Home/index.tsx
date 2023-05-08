import React, { useCallback } from "react";
import DefaultHeader from "@components/molecules/DefaultHeader";
import { Text } from "@components/atoms/Text";
import { List } from "@components/atoms/List";
import DefaultFooter from "@components/molecules/DefaultFooter";
import { DefaultPageProps } from "@interfaces/page";
 
import styles from './index.module.css';

type HomeProps = DefaultPageProps & {
  className?: string;
  }

function Home (props: HomeProps): JSX.Element {
  
  
  
  
  return (<div className={styles.page_container} ><DefaultHeader className={styles.defaultheader_1} />
<div className={styles.box_0} ><Text textType='Text' className={styles.text_1} >{'TERRA SUN'}</Text>
<List dataSource={undefined} className={styles.list_1} rowKey={useCallback((item: Record<string, unknown>) => `${item.id}_${item.created_at}`, [])} /></div>
<DefaultFooter className={styles.defaultheader_1} btn_prop={'Hola'} onPress={{}} /></div>);
}

export default Home;
