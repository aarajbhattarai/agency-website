import { getStrapiMedia } from "utils/media"
import Image from "next/image"
import PropTypes from "prop-types"
import { mediaPropTypes } from "utils/types"

const NextImage = ({ media, ...props }) => {
  const { url, alternativeText, width, height } = media.data.attributes
  console.log(media.data.attributes)
  console.log("URL",url)
  const loader = ({ src}) => {
    // return getStrapiMedia(src)+"h="+ height+"w="+width
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      // <Image loader={loader} src={url} alt={alternativeText || "Ideal Tours and Travels"} {...props} />
      <Image loader={loader} src={url} alt="Demo Fixes alt" height={props.height} width={props.width} {...props} />
      
    )
  }

  // The image is responsive
  return (
    <Image
      loader={loader}
      layout="responsive"
      width={width || "100%"}
      height={height || "100%"}
      objectFit="contain"
      src={url}
      alt="Demo alt"

    />
  )
}

Image.propTypes = {
  media: mediaPropTypes.isRequired,
  className: PropTypes.string,
}

export default NextImage
