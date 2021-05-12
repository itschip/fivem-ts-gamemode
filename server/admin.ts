import { Command, CommandEvent } from '@server/commands'

@CommandEvent()
class Admin {
  constructor() {
  }

  @Command({
    command: 'kick',
    restricted: false
  })
  public Kick() {
    console.log('hehe')
  }
}

new Admin()