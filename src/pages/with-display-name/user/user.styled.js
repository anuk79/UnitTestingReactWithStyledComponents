// vendors
import styled from 'styled-components';

// components
import LoadingSpinner from '../../../components/loading-spinner/loading-spinner';

export const LoadingSpinnerStyled = styled(LoadingSpinner)`
    margin: 20px;
`;
LoadingSpinnerStyled.displayName = 'LoadingSpinnerStyled';

export const ErrorStyled = styled.div`
    color: red;
    font-size: 14px;
    margin: 20px;
`;
ErrorStyled.displayName = 'ErrorStyled';