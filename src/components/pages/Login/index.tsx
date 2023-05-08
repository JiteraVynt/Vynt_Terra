import Background from "@components/molecules/Background";
import { Text } from "@components/atoms/Text";
import Wrapper from "@components/molecules/Wrapper";
import { Button } from "@components/atoms/Button";
 import { useNavigateService } from "@services/navigate";
import React from "react";
import { DefaultPageProps } from "@interfaces/page";

import styles from './index.module.css';

type LoginProps = DefaultPageProps & {
  className?: string;
  }

function Login (props: LoginProps): JSX.Element {
  const navigation = useNavigateService()
  
  
  const handleButton1 = () => {
  navigation.navigate('/')
}
  return (<div className={styles.page_container} ><Background className={styles.background_1} />
<div className={styles.container_7} ><div className={styles.wrapper_7} ><Text textType='Text' className={styles.text_4} >{'Welcome back!'}</Text>
<div className={styles.card_7} ><Text textType='Text' className={styles.text_6} >{'Login'}</Text>
<div className={styles.login_form_7} ><Wrapper className={styles.email} label={'Email'} />
<Button buttonType='primary' className={styles.button_1} onClick={handleButton1} >{'Login'}</Button>
<Wrapper className={styles.email} label={'Password'} /></div></div></div></div></div>);
}

export default Login;
