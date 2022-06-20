import { useState, useRef } from "react";

import StyledPostModal, { PostModalForm, PostModalHeader } from "./styled/PostModal.styled";

const PostModal = ({ setPostModal }) => {
  const [value, setValue] = useState({ post: "" });
  const backgroundRef = useRef();
  return (
    <StyledPostModal ref={backgroundRef} onClick={event => {if (event.target === backgroundRef.current) setPostModal(false) }}>
        <PostModalForm onSubmit={event => {
                event.preventDefault();
                const postText = value.post;
                if (postText.length > 0) {
                    // Send Request
                }
                setValue({ post: "" });
                setPostModal(false)
            }}>
            <PostModalHeader>
                <h1>New Post</h1>
            </PostModalHeader>
            <textarea name="Post" value={value.post} maxLength="255" onChange={event => setValue({ [event.target.name]: event.target.value })} />
            <sub>Characters Left: {255 - value.post.length}</sub>
            <button type="submit"><p>Submit New Post</p></button>
        </PostModalForm>
    </StyledPostModal>
  );
};

export default PostModal