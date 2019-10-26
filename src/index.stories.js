/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '@/components/MyButton.vue'
import HelloWord from '@/components/HelloWorld.vue'
import Aside from '@/components/Aside/index.vue'
import Head from '@/components/Head/index.vue'
import Widget from '@/components/Widget/index.vue'
import store from '@/store'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') }
  }))
storiesOf('HelloWord', module)
  .add('with text', () => ({
    components: { HelloWord },
    template: '<hello-word></hello-word>'
  }))
storiesOf('Aside', module)
  .add('plain', () => ({
    components: { Aside },
    template: '<Aside></Aside>'
  }))
storiesOf('Head', module)
  .add('plain', () => ({
    components: { Head },
    template: '<Head></Head>'
  }))
storiesOf('Widget', module)
  .add('plain', () => ({
    components: { Widget },
    template: '<Widget></Widget>',
    store: store
  }))
