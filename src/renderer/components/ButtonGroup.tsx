/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import {
  FontIncrease24Regular,
  FontDecrease24Regular,
  TextFont24Regular,
  Save24Regular,
  SaveEdit24Regular,
} from '@fluentui/react-icons';
import {
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
} from '@fluentui/react-components';
import type { ToolbarProps } from '@fluentui/react-components';
import { SaveState } from '../App';

export const ButtonGroup = (
  props: Partial<ToolbarProps> & {
    onPlusClick: () => void;
    onMinusClick: () => void;
    onResizeClick: () => void;
    onSaveClick: () => void;
    isChanged: boolean;
    saveState: SaveState;
  }
) => (
  <Toolbar aria-label="Default" {...props}>
    <ToolbarButton
      onClick={props.onPlusClick}
      aria-label="Increase Font Size"
      appearance="primary"
      icon={<FontIncrease24Regular />}
    />
    <ToolbarButton
      aria-label="Decrease Font Size"
      icon={<FontDecrease24Regular />}
      onClick={props.onMinusClick}
    />
    <ToolbarButton
      onClick={props.onResizeClick}
      aria-label="Reset Font Size"
      icon={<TextFont24Regular />}
    />
    <ToolbarDivider />
    <ToolbarButton
      aria-label="Save"
      onClick={props.onSaveClick}
      icon={
        props.saveState === 'saved'
        ? <Save24Regular />
        : props.saveState === 'editing'
        ? <SaveEdit24Regular/>
        :<Save24Regular />
      }
      // appearance={props.isChanged ? 'primary' : 'subtle'}
    />
  </Toolbar>
);
