import { BsFillChatRightFill, BsFacebook ,BsTwitter , BsInstagram , BsLinkedin } from "react-icons/bs";
import appstore from '../../public/appstore.png'
import playstore from '../../public/playstore.png'


const footerData = {
  icon: <BsFillChatRightFill />,
  boxtext: "HUB SPOT",
  title: "Contact Us",
  info: [
    {
      name: "Izzy",
      email: "izzyhowe@eate.company",
      number: "07311259774",
    },
    {
      name: "Sam",
      email: "samuelchapman@eatecollective.com",
      number: "07896855822",
    },
  ],
  address: "1 Victoria Street, Bristol, BS1 6A",
  socialmedia: [<BsFacebook key="facebook" />, <BsTwitter key="Twitter" /> ,<BsInstagram key="Instagram"/>,<BsLinkedin key="Linkedin"/>],
  reserved: "© 2023 Leafe, All rights reserved.",
  appstore: appstore,
  playstore: playstore,
  text1: "Privacy & Policy",
  text2: "Terms & Conditions"
};

export default footerData;
