const OpenAI = require('openai');

const configuration = new OpenAI.Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI.OpenAIApi(configuration);

export async function getGPTResponse(prompt: string): Promise<string> {
  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
    return 'Something went wrong.';
  }
}
