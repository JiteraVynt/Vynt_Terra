import { Text } from '@components/atoms/Text';
import DefaultHeaderMenu from '@components/molecules/DefaultHeaderMenu';
import DefaultHamburgerMenu from '@components/molecules/DefaultHamburgerMenu';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type DefaultHeaderProps = DefaultPageProps & {
  className?: string;
};

function DefaultHeader(props: DefaultHeaderProps): JSX.Element {
  return (
    <div className={`${styles.header_0} ${props.className}`}>
      <div className={styles.header_box_0}>
        <div className={styles.box_2}>
          <div className={styles.header_box_1}>
            <Text textType="Text" className={styles.text_1}>
              {'Terra Sun'}
            </Text>
          </div>
        </div>
        <div className={styles.box_3}>
          <DefaultHeaderMenu className={styles.header_defaultheadermenu_0} />
        </div>
        <div className={styles.box_4}>
          <DefaultHamburgerMenu className={styles.header_defaulthamburgermenu_1} />
        </div>
      </div>
    </div>
  );
}

export default DefaultHeader;
