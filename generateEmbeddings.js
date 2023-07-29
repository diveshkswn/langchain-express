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
        `City Name:${destination.city}\n\n City Description: ${ destination.overview }\n\n city Country: ${destination.country}\n\n
        city image url: ${
            destination.imgURL
        }\n\n ${destination.cityRestaurant?.map((restaurant)=>`city restaurant : ${restaurant.restaurantName} \n\n
        city restaurant description : ${restaurant.restaurantDesc} \n\n
        city restaurant price : ${restaurant.costFor2} \n\n
        `)} \n\n
        ${destination.itinerary.map((itinerary)=>`city destination : ${itinerary.destination} \n\n
        city destination description : ${itinerary.destinationDesc} \n\n
        city destination image URL : ${itinerary.destinationImgUrl} \n\n
        `)} \n\n
        Travel Style  : ${destination.travelStyle.join(" ")}
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