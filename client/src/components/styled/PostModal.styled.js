import styled from "styled-components";

const PostModal = styled.div``;

export const PostModalForm = styled.form``;

export const PostModalHeader = styled.div``;

export const PostModalButton = styled.i`
margin-top: auto;
margin-inline: auto;
padding: 0.7rem 1.7rem;
font-size: 2.8rem;
color: ${({ theme }) => theme.primary};
background-color: transparent;
border-radius: 5px;
border: 4px solid ${({ theme }) => theme.primary};
@media(min-width: 600px) {
    margin-top: 0;
    margin-inline: 0;
    padding: 0.2rem 1rem;
    font-size: 2rem;
    &:hover {
        color: ${({ theme }) => theme.elevation_2};
        background-color: ${({ theme }) => theme.primary};
        transition: all 150ms ease-in;
    }
}
`;

export default PostModal;