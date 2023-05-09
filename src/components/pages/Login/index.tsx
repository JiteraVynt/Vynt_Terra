import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DefaultHeader from "@components/molecules/DefaultHeader";
import { Text } from "@components/atoms/Text";
import { ControlledInput } from "@components/atoms/ControlledInput";
import { Button } from "@components/atoms/Button";
import DefaultFooter from "@components/molecules/DefaultFooter";
 import { useLoginWithEmailMutation } from "@services/authentication";
import { useNavigateService } from "@services/navigate";
import { DefaultPageProps } from "@interfaces/page";

import styles from './index.module.css';

type LoginProps = DefaultPageProps & {
  className?: string;
  }
interface Form1FormData {
input_email: string
input_password: string
}
function Login (props: LoginProps): JSX.Element {
  const loginWithEmailMutation = useLoginWithEmailMutation()
const navigation = useNavigateService()
  const formForm1 = useForm1()
  
  const handleForm1Button = async (values: Form1FormData) => {
  
        try {
          await loginWithEmailMutation.mutateAsync({ table: 'users', email: values.input_email, password: undefined })
          navigation.navigate('/')
        } catch (error: unknown) {
          
        }
      
}
  return (<div className={styles.page_container} ><DefaultHeader className={styles.defaultheader_1} />
<div className={styles.container_7} ><div className={styles.wrapper_7} ><Text textType='Text' className={styles.text_4} >{'Terra Sun - Login'}</Text>
<div className={styles.card_7} ><form className={styles.form_1} ><div className={styles.input_4_container} ><div className={styles.input_4_inner} ><Text textType='Text' className={styles.input_4_label} >{'Email'}</Text>
<Text textType='Text' className={styles.input_4_required} >{'*'}</Text></div>
<ControlledInput placeholder={'Placeholder'} className={styles.input_email} control={formForm1.control} formField='input_email' inputStyle={{ backgroundColor: "rgb(255, 255, 255)", width: "100%", fontWeight: "500", border: "1px solid rgb(217, 217, 217)"}} />
<div className={styles.input_4_error_message_container} ><Text textType='Text' className={styles.input_4_required} >{'Error Message'}</Text></div></div>
<div className={styles.input_4_container} ><div className={styles.input_4_inner} ><Text textType='Text' className={styles.input_4_label} >{'Password'}</Text>
<Text textType='Text' className={styles.input_4_required} >{'*'}</Text></div>
<ControlledInput placeholder={'Placeholder'} isPasswordField className={styles.input_email} control={formForm1.control} formField='input_password' inputStyle={{ backgroundColor: "rgb(255, 255, 255)", width: "100%", fontWeight: "500", border: "1px solid rgb(217, 217, 217)"}} />
<div className={styles.input_4_error_message_container} ><Text textType='Text' className={styles.input_4_required} >{'Error Message'}</Text></div></div>
<Button buttonType='primary' className={styles.form_1_button} onClick={formForm1.handleSubmit(handleForm1Button)} >{'Login'}</Button></form></div></div></div>
<DefaultFooter className={styles.defaultheader_1} btn_prop={{}} onPress={{}} /></div>);
}

    const useForm1 = () => {
      const validationScheme = useMemo(() => (
yup.object().shape({
input_email: yup.string().notRequired(),
input_password: yup.string().notRequired(),
})), [])
      return useForm<Form1FormData>({
      resolver: yupResolver(validationScheme),
      shouldFocusError: true,
      mode: 'onChange',
      reValidateMode: 'onChange',
    });
    }
export default Login;
