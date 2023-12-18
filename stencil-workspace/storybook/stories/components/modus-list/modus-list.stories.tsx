// @ts-ignore: JSX/MDX with Stencil
import docs from './modus-list-storybook-docs.mdx';
import { html } from 'lit-html';

export default {
  title: 'Components/List',
  argTypes: {
    subText: {
      description: "set the sub-text for the list-item",
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      page: docs,
    },
    controls: {
      expanded: true,
    },
    options: {
      isToolshown: true,
    },
  },
};

const Template = ({ subText }) => html`
  <modus-list>
    <modus-list-item sub-text=${subText}>Default</modus-list-item>
    <modus-list-item selected>Selected</modus-list-item>
    <modus-list-item disabled>Disabled</modus-list-item>
  </modus-list>
`;
export const Default = Template.bind({});

Default.args = {
  subText: 'default'
};
