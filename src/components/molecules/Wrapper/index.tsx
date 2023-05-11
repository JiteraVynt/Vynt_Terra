import { Text } from '@components/atoms/Text';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type WrapperProps = DefaultPageProps & {
  className?: string;
  label: string;
};

function Wrapper(props: WrapperProps): JSX.Element {
  return (
    <div className={`${styles.page_container} ${props.className}`}>
      <div className={styles.title_13}>
        <Text textType="Text" className={styles.text_13}>
          {props.label}
        </Text>
      </div>
      <div className={styles.input_15}>
        <Text textType="Text" className={styles.text_15}>
          {'Placeholder'}
        </Text>
      </div>
    </div>
  );
}

export default Wrapper;
