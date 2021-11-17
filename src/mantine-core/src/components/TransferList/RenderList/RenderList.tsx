import React from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { TransferListItem } from '../types';
import useStyles from './RenderList.styles';

export type RenderListStylesNames = ClassNames<typeof useStyles>;

interface RenderListProps extends DefaultProps<RenderListStylesNames> {
  data: TransferListItem[];
  onSelect(value: string | string[]): void;
  selection: string[];
}

export function RenderList({ className, data, onSelect, selection }: RenderListProps) {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.renderList, className)}>RenderList</div>;
}

RenderList.displayName = '@mantine/core/RenderList';
