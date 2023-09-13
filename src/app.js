import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return (async () => {
      try {
        const buffer = await read();
        return (async () => {
          try {
            return JSON.parse(await json(buffer));
          } catch (error) {
            console.log(error);
          }
        })();
      } catch (error) {
        console.log(error);
      }
    })();
  }
}
