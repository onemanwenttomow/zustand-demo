import useUserStore from "@/store";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import styled from "styled-components";

const BioWrapper = styled.div`
  position: relative;
`;

const EditIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
`;

export default function BioEditor() {
  const [isEditMode, setIsEditMode] = useState(false);
  const bio = useUserStore((state) => state.user.bio);
  const editBio = useUserStore((state) => state.editBio);

  function toggleEditMode() {
    setIsEditMode(!isEditMode);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { bio } = Object.fromEntries(formData.entries());
    editBio(bio);
    toggleEditMode();
  }

  return (
    <BioWrapper>
      {!isEditMode && (
        <EditIconWrapper onClick={toggleEditMode}>
          <FaEdit />
        </EditIconWrapper>
      )}

      {isEditMode ? (
        <form onSubmit={handleSubmit}>
          <StyledTextArea
            defaultValue={bio}
            id="bio"
            name="bio"
            rows={6}
          ></StyledTextArea>
          <button type="submit">Edit</button>
          <button type="button" onClick={toggleEditMode}>
            Cancel
          </button>
        </form>
      ) : (
        <p>{bio}</p>
      )}
    </BioWrapper>
  );
}
