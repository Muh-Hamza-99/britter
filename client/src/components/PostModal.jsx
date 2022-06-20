import StyledPostModal, { PostModalForm, PostModalHeader } from "./styled/PostModal.styled";

const PostModal = () => {
  return (
    <StyledPostModal>
        <PostModalForm>
            <PostModalHeader></PostModalHeader>
            <textarea name="Post" />
            <button type="submit"></button>
        </PostModalForm>
    </StyledPostModal>
  );
};

export default PostModal