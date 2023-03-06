const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('infouser')
    .setDescription('Informações de usuário!')
    /**
 * 
 * @param {ChatInputCommandInteraction} interaction 
 */
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('Ver as informações de um usuário específico.')
        .setRequired(false)
    ),

  async execute(interaction) {

    const user = interaction.options.getUser('user') || interaction.user

    const embedUser = new EmbedBuilder()

      .setColor('#0099ff')
      .setTitle(`${user.username}`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'Tag', value: user.tag, inline: true },
        { name: 'ID', value: user.id, inline: true },
        { name: 'Nome', value: user.username, inline: true },
        { name: 'Criado em', value: user.createdAt.toLocaleDateString(), inline: true },
      );

    await interaction.reply({ embeds: [embedUser], ephemeral: true })

  },
};
