import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const buffer = await read();
        const result = await json(buffer);
        return JSON.parse(result);
      } catch (error) {
        return error;
      }
    })();
  }
}
