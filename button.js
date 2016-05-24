import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Button', module)
  .add('Login Button', () => (
    <button onClick={action('clicked')}>My First Button</button>
  ))
