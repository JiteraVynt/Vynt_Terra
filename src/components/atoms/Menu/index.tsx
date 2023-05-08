import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd'
import React from 'react'
import { MenuWrapper } from './MenuItem.styles'

export interface MenuProps extends AntMenuProps {}

export const Menu = (props: MenuProps) => {
  const { className, ...rest } = props
  return (
    <MenuWrapper className={className}>
      <AntMenu {...rest} />
    </MenuWrapper>
  )
}

export * from './MenuItem.component'
export * from './SubMenu.component'
