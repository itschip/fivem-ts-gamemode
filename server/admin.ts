import { Command, CommandEvent } from '@server/commands'

@CommandEvent()
class Admin {
  constructor() {
  }

  @Command({
    command: 'kick',
    args: ['src', 'reason'],
    restricted: false
  })
  public Kick(playerId: number, reason: string) {
    console.log('hehe')
    DropPlayer(playerId.toString(), reason);
  }
}

new Admin()