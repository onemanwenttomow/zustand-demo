import Image from "next/image";
import BioEditor from "./BioEditor";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  background-color: rgba(246, 241, 233, 1);
  max-width: 460px;
  margin: 4rem auto;
  padding: 1rem;
`;

const StyledHeading = styled.h2`
  margin: 0.8rem 0;
`;

export default function Profile({ user, editBio }) {
  return (
    <StyledWrapper>
      <Image
        src={user.image}
        alt={`avatar for ${user.firstName} ${user.lastName}`}
        width="100"
        height="100"
      />
      <div>
        <StyledHeading>
          {user.firstName} {user.lastName}
        </StyledHeading>
        <BioEditor bio={user.bio} editBio={editBio} />
      </div>
    </StyledWrapper>
  );
}
