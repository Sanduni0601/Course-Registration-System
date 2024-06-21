const { BotFrameworkAdapter, MemoryStorage, ConversationState, UserState } = require('botbuilder');

const memoryStorage = new MemoryStorage();
const conversationState = new ConversationState(memoryStorage);
const userState = new UserState(memoryStorage);
const adapter = new BotFrameworkAdapter({
  appId: '51125253-bcb6-4a98-8e88-d0f8ba72f467', 
  appPassword: 'C2a8Q~PTiNqO8DRUM5ax4BFfojiOtOmNCBhnVdfT'
});


const bot = async (context) => {
  if (context.activity.type === 'message') {
    const userText = context.activity.text;
    let responseText = 'I didn’t understand that. Can you say it differently?';

    if (userText.includes('course')) {
      responseText = 'You can register for courses through our course registration system.';
    } else if (userText.includes('availability')) {
      responseText = 'Please check the course registration portal for course availability.';
    }

    await context.sendActivity(responseText);
  }
};

module.exports = {
  adapter,
  bot,
};
