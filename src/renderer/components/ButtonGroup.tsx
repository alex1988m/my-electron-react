/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
  Save24Regular,
} from '@fluentui/react-icons';
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
} from '@fluentui/react-components';
import type { ToolbarProps } from '@fluentui/react-components';

export const ButtonGroup = (props: Partial<ToolbarProps>) => (
  <Toolbar aria-label="Default" {...props}>
    <ToolbarButton
      aria-label="Increase Font Size"
      appearance="primary"
      icon={<FontIncrease24Regular />}
    />
    <ToolbarButton
      aria-label="Decrease Font Size"
      icon={<FontDecrease24Regular />}
    />
    <ToolbarButton aria-label="Reset Font Size" icon={<TextFont24Regular />} />
    <ToolbarDivider />
    <ToolbarButton aria-label="Save" icon={<Save24Regular />} />
  </Toolbar>
);
