import styled from "styled-components";

const Container = styled.div`
display: flex;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>{item.title}</Container>
  )
}

export default CategoryItem