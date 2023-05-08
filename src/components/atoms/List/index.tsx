import React from 'react';
import { List as AntList, ListProps as AntListProps } from 'antd';

export interface ListProps<ItemType extends Record<string, unknown>> extends AntListProps<ItemType> {}

const List = <ItemType extends Record<string, unknown>>(props: ListProps<ItemType>) => {
  const { style, className, ...rest } = props;
  return (
    <div style={style} className={className}>
      <AntList style={{ width: '100%', height: 'auto' }} {...rest} />
    </div>
  );
};

export { List };
