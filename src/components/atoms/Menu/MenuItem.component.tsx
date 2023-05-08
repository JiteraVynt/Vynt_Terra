import React from 'react'
import { Menu as AntMenu, MenuItemProps as AntMenuItemProps } from 'antd'
import { assertUnreachable, Icon, IconProps } from '@components/atoms/Icon'
import { Horizontal, MenuItemInner, MenuItemWrapper, Vertical } from './MenuItem.styles'

export enum MenuIconPosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom'
}

const { Item: AntMenuItem } = AntMenu

export interface MenuItemProps extends AntMenuItemProps {
  label: string
  iconProps?: IconProps
  iconPosition?: MenuIconPosition
  spaceBetween?: number
}

export const MenuItem = (
  (
    { label, iconProps, iconPosition, spaceBetween, className, ...restProps }: MenuItemProps
  ) => {
    return (
      <MenuItemWrapper className={className}>
        <MenuItemInner>
          <AntMenuItem {...restProps}>
            {iconProps && iconPosition && spaceBetween
              ? renderTextWithIcon(iconProps, iconPosition, spaceBetween, label)
              : label}
          </AntMenuItem>
        </MenuItemInner>
      </MenuItemWrapper>
    )
  }
)

function renderTextWithIcon(
  iconProps: IconProps,
  iconPosition: MenuIconPosition,
  spaceBetween: number,
  label: string
): JSX.Element {
  switch (iconPosition) {
    case MenuIconPosition.Left:
      return (
        <Horizontal style={{ gap: spaceBetween }}>
          <Icon {...iconProps} />
          {label}
        </Horizontal>
      )
    case MenuIconPosition.Right:
      return (
        <Horizontal style={{ gap: spaceBetween }}>
          {label}
          <Icon {...iconProps} />
        </Horizontal>
      )
    case MenuIconPosition.Top:
      return (
        <Vertical style={{ gap: spaceBetween }}>
          <Icon {...iconProps} />
          {label}
        </Vertical>
      )
    case MenuIconPosition.Bottom:
      return (
        <Vertical style={{ gap: spaceBetween }}>
          {label}
          <Icon {...iconProps} />
        </Vertical>
      )
    default:
      return assertUnreachable(iconPosition)
  }
}
