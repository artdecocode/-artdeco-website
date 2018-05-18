import { equal } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import artdecoWebsite from '../../src'

/** @type {Object.<string, (ctx: Context)>} */
const T = {
  context,
  'is a function'() {
    equal(typeof artdecoWebsite, 'function')
  },
  async 'calls package without error'() {
    await artdecoWebsite()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T
