import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      const buffer = await read();
      return (async () => JSON.parse(await json(buffer)))();
    })();
  }
}
