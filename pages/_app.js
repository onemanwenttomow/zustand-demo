import { useState } from "react";
import GlobalStyle from "../styles";

const initialUser = {
  firstName: "Peter",
  lastName: "Anderson",
  jobTitle: "Developer",
  bio: "I am a developer",
  image:
    "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=BlazerSweater&clotheColor=Pink&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Yellow",
};

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(initialUser);

  function editBio(newBio) {
    setUser({ ...user, bio: newBio });
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} user={user} editBio={editBio} />
    </>
  );
}
