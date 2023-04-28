import Profile from "@/components/Profile";

export default function HomePage({ user, editBio }) {
  return <Profile user={user} editBio={editBio} />;
}
