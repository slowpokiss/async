import GameSavingLoader from '../src/app';

test('test for async', (done) => {
  (async () => {
    try {
      const result = await GameSavingLoader.load();
      const expected = {
        id: 9,
        created: 1546300800,
        userInfo: {
          id: 1,
          name: 'Hitman',
          level: 10,
          points: 2000,
        },
      };
      expect(result).toEqual(expected);
      done();
    } catch (err) {
      console.log(err);
    }
  })();
});
