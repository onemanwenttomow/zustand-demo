import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    firstName: "Peter",
    lastName: "Anderson",
    jobTitle: "Developer",
    bio: "I am a developer",
    image:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=BlondeGolden&clotheType=BlazerSweater&clotheColor=Pink&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Yellow",
  },

  editBio: (newBio) =>
    set((state) => ({
      user: {
        ...state.user,
        bio: newBio,
      },
    })),
}));

export default useUserStore;
