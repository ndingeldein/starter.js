import test from 'ava'
import Notification from '../src/Notification'

test('start with failing test', t => {
  t.true(Notification.data().message, 'Hello Worldx')
})
