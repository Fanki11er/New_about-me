import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
display: flex;
    width: 200px;
    height: 45px;
`;
interface Props {
    icon: any;
    label: any;
}

const ListHeader = (props: Props)=> {
    const {icon, label} = props;
return (
    <StyledWrapper>
        
    </StyledWrapper>
)
}

export default ListHeader;