import { Box, Slider } from "@chakra-ui/react";
import Footer from "../LandingPage/Footer";
import Navbar from "../LandingPage/Navbar";
import ShowList from "../LandingPage/ShowAndMovies/MovieList";
import Slide from "../LandingPage/SlideShow/Slide";

function HomePage() {
    return (
      <Box>
        <Navbar />
        <Slide />
        <ShowList />
        <Footer />
      </Box>
    );
  }
  
  export default HomePage;
  