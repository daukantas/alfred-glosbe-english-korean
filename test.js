import test from 'ava';
import alfyTest from 'alfy-test';

test('a single item is expected', async t => {
  const alfy = alfyTest();

  const result = await alfy('h');

  t.deepEqual(result, [
    {
      title: '시'
    }
  ]);
});

test('no item is expected', async t => {
  const alfy = alfyTest();

  const result = await alfy('helo');

  t.deepEqual(result, [
    {
      title: 'No result found'
    }
  ]);
});