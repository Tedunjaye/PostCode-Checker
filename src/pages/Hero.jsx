import Feed from "../components/Feed"
import Map from "../components/Map"
import PostCode from "../components/PostCode"
import SearchBar from "../components/SearchBar"



const Hero = () => {
  return (
    <div>
      <SearchBar />
      <Feed />
      <PostCode />
      <Map />
    </div>
  )
}

export default Hero