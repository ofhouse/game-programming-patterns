import { Command } from './command';
import Actor from './actor';

class RightCommand implements Command {
  execute = (actor: Actor) => actor.goRight();
}

export { RightCommand };
