/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import classnames from 'classnames';

import './ContentSeparator.style.scss';
import { Props } from './ContentSeparator.types';
import { STYLE } from './ContentSeparator.constants';
import { useSeparator } from '@react-aria/separator';

const ContentSeparator: React.FC<Props> = (props: Props) => {
  const { className, children, gradient } = props;

  const { separatorProps } = useSeparator({
    elementType: 'li',
  });

  return (
    <li
      {...separatorProps}
      className={classnames(className, STYLE.wrapper)}
      data-gradient={gradient}
    >
      {children}
    </li>
  );
};

// @ts-ignore
ContentSeparator.getCollectionNode = function* getCollectionNode(props: any, ...rest: any[]) {
  // Pretend the separator is another item in a menu, but give it a special _isSeparator prop to identify it
  yield { type: 'item', props: { ...props, _isSeparator: true } };
};

/**
 * ContentSeparator with text/other component in the middle
 */

export default ContentSeparator;
