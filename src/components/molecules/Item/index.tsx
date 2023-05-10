import Image from 'next/image';
import React from 'react';
import { DefaultPageProps } from '@interfaces/page';

import styles from './index.module.css';

type ItemProps = DefaultPageProps & {
  className?: string;
  terrarium_item: any;
};

function Item(props: ItemProps): JSX.Element {
  return (
    <div className={`${styles.custom_component_container} ${props.className}`}>
      <Image
        className={styles.image_1}
        width="300"
        height="300"
        src="https://picsum.photos/600/600"
        alt="image_1"
      />
    </div>
  );
}

export default Item;
