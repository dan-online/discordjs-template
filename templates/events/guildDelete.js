module.exports = (client, guild) => {
  console.log(`[GUILD LEAVE] ${guild.name} (${guild.id}) removed the bot.`);
  if (client.settings.has(guild.id)) {
    client.settings.delete(guild.id);
  }
};
