import * as React from 'react';
import {
  Field,
  Textarea,
  makeStyles,
  tokens,
} from '@fluentui/react-components';
import type { TextareaProps } from '@fluentui/react-components';
import { Prettify } from '../utils';

type Props = Partial<TextareaProps>;

export function InputText(props: Props) {
  return (
    <div className="input-text">
      <Field>
        <Textarea {...props} />
      </Field>
    </div>
  );
}
