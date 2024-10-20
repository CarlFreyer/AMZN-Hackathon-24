import Img1 from "../assets/image/sent1.png";
import Img2 from "../assets/image/sent2.png";
import Img3 from "../assets/image/sent3.png";
import pfp1 from "../assets/image/pfp1.png";
import pfp2 from "../assets/image/pfp2.png";
import pfp3 from "../assets/image/pfp3.png";
import pfp4 from "../assets/image/pfp4.png";


export const SeedMessages = [
  { id: 1, pfp: pfp1, owner: false, message: "Hi!", images: [] },
  {
    id: 2,
    pfp: pfp4,
    owner: true,
    message: "Hey, how are you",
    images: [],
  },
  { id: 3, pfp: pfp2, owner: false, message: "Good, how's studying for the exam going?", images: [] },
  {
    id: 4,
    pfp: pfp3,
    owner: false,
    message: "ugh I cannot figure out THREADS.",
    images: [],
  },
  {
    id: 5,
    pfp: pfp4,
    owner: true,
    message: "omg i relate :( yea it can get pretty confusing",
    images: [],
  },
  { id: 6, pfp: pfp2, owner: false, message: "have you tried doing the practice problem #4 in the book?", images: [] },
  { id: 7, pfp: pfp1, owner: false, message: "I thought that was a really good one to practice too", images: [] },
  { id: 8, pfp: pfp4, owner: true, message: "I left my book at home:( can someone send it to me please?", images: [] },
  {
    id: 9,
    pfp: pfp2,
    owner: false,
    message: "let me know what you think",
    images: [Img1, Img2, Img3],
  },
];