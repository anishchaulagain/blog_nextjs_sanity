import ImageUrlBuilder  from "@sanity/image-url";
import { client } from "./sanity";
import build from "next/dist/build";

const builder = ImageUrlBuilder(client);

const urlFor = (source: any ) =>{
    return builder.image(source)
}

export default urlFor