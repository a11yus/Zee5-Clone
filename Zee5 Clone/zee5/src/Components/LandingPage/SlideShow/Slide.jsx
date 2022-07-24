import SlideFunc from "./SlideFunc";
import { Button } from '@chakra-ui/react';
import React from "react";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// set this as the
const data = [
  {
    id: 1,
    image: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z517068/cover/1170x658withlogo605e9e2bd8934c13ae9ee223b93f576e.jpg",
  },
  {
    id: 2,
    image: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/cover/1170x658withlogo158fe42385ba4591b69f84e95b2d2a71.jpg",
  },
  {
    id: 3,
    image: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5149852/cover/1170x658withlogodc8fc8fcaa1b4c8cbe880703b023a1d1.jpg",
  },
  {
    id: 4,
    image: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5177236/cover/1170x658withlogobc8d428135c845adb5e2fbe837cc51d9.jpg",
  },
  {
    id: 5,
    image: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5172356/cover/1170x658withlogo589f4e358a0f439894b9d63907a1268c0d4057f5e25a4b03b1081bf90ccc2dca.jpg",
  },
  {
    id: 6,
    image: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x77050480c91c7534e2f846717dc69b6e82c.jpg",
  },
  {
    id: 7,
    image: "https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5161064/cover/1920x770141bcd9ccf9945d490a7935a3cc311069180d7d5e4c248279410203ac82bc67d.jpg",
  }
];
//
export default function Slide() 
{
  const [word, setWord] = React.useState(0);

  return (
    <div className="App">
      <SlideFunc data={data} pos={word} />
      <Button
        variant='ghost'
        style=
        {{
            bottom: '15rem',
            right: '32rem',
            color: 'white',
            fontSize: '4rem',
        }}
        disabled={word === 0}
        data-testid="prev"
        onClick={() => {
          if (word >= 1) {
            setWord(word - 1);
          }
        }}
      >
        <HiChevronLeft />
      </Button>

      <Button
      variant='ghost'
      style=
        {{
            bottom: '15rem',
            left: '32rem',
            color: 'white',
            fontSize: '4rem'
        }}
        disabled={word === data.length - 1}
        data-testid="next"
        onClick={() => {
          if (word < data.length - 1) {
            setWord(word + 1);
          }
        }}
      >
        <HiChevronRight />
      </Button>
    </div>
  );
}
