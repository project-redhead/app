import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import { Button, Widget, Sidebar, SidebarItem } from '../src/ui'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('default', () => (
    <Button>Default Button</Button>
  ));

storiesOf('Widget', module)
  .add('default', ()  => (
    <Widget title="Widget">
      Why, hello there
    </Widget>
  ));

storiesOf('Sidebar', module)
  .add('default', () => (
    <Sidebar>
      <SidebarItem>

      </SidebarItem>
      <SidebarItem isActive={true}>

      </SidebarItem>
      <SidebarItem>

      </SidebarItem>
    </Sidebar>
  ));