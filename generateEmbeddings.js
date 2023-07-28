// / ./functions/generateEmbeddings.ts
import { destinations } from './data/destinationdata.js';




import * as dotenv from 'dotenv';

// 4. Load Environment Variables
dotenv.config()

import { HNSWLib } from "langchain/vectorstores/hnswlib"
import { OpenAIEmbeddings } from "langchain/embeddings/openai"


export const generateEmbeddings = async () => {
  try {
    const start = performance.now() / 1000

    const textsToEmbed = destinations.map(
      (destination) =>
        `City Name:${destination.cityName}\n\n City Description: ${ destination.cityDesc }\n\n city Country: ${destination.cityCountry}\n\n
        city image url: ${
            destination.imgURL
        }\n\n ${destination.activities.map((activity)=>`city activities : ${activity.activityName} \n\n `)} \n\n
        ${destination.activities.map((activity)=>`city restaurant : ${activity.activityName} \n\n`)}
        `
    )

    const metadata = destinations.map((destination) => ({ id: destination.id, name : destination.cityName }))

    const embeddings = new OpenAIEmbeddings()

    const vectorStore = await HNSWLib.fromTexts(
      textsToEmbed,
      metadata,
      embeddings
    )

		// saves the embeddings in the ./movies directory in the root directory
    await vectorStore.save("destinationvector")

    const end = performance.now() / 1000

    console.log(`Took ${(end - start).toFixed(2)}s`)
  } catch (error) {
    console.error(error)
  }
}

generateEmbeddings()