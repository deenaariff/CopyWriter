import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generatePrompt(req.body.prompt),
    temperature: 0.9,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(prompt) {
  return `Reword this sentence to make it better.

Original: He picked up something heavy and hit James on the face. James cried out, and fell.
Better: He snatched up a rock and smashed it against James’ nose. James groaned, and sank to his knees.
Original: The morning sun’s silent rays burned Julia’s skin as she walked from the grassy, open field into the deeply forested woods. Immediately the late spring air felt cooler.
Better: The morning sun burned Julia’s skin as she walked from the grassy field into the deep woods. Immediately the late spring air felt cooler.
Original: The man was there in the bushes, waiting. When Joan was just three feet away, he kind of tensed, then leaped out and grabbed her. Joan struggled, but it seemed he was just too strong for her, and finally they fell down. She actually screamed, and even scratched his face.
Better: The man was in the bushes, waiting. When Joan was three feet away, he tensed, leaped out, and grabbed her. Joan struggled, but he was too strong for her, and they fell down. She screamed, and scratched his face.
Original: ${prompt}
Better:`;
}
