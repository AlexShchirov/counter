import styled from "styled-components";

export const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px;
`;

export const SettingsContainer = styled.div`
    background-color: #4E8098;
    border: 2px solid #00FFFF;
    color:#00FFFF;
    border-radius: 20px;
    padding: 16px;
    margin-right: 16px;
`;

export const CounterContainer = styled.div`
    background-color: #4E8098;
    color: #00FFFF;
    border: 2px solid #00FFFF;
    border-radius: 20px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    margin-bottom: 8px;
    margin-right: 10px;
`;

export const Input = styled.input<{ error: boolean }>`
    background-color: #C2FFFF;
    border: 2px solid ${({ error }) => (error ? "red" : "#00FFFF")};
    padding: 4px;
    margin-bottom: 16px;
    color: #0A0A0A;
    appearance: none;
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

export const Button = styled.button<{ disabled: boolean }>`
    margin: 0 8px;
    padding: 12px 24px;
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "#3772FF")};
    color: #ffffff;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    border: none;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
        background-color: ${({ disabled }) =>
            disabled ? "lightgray" : "#0077ff"};
    }
`;
export const CountContainer = styled.div`
    min-width: 50px;
    text-align: center;
    padding: 0 10px 0 10px; 
    margin-top:15px;
    margin-bottom:45px;
    border-radius:10px;
    background-color: #C2FFFF;
    border: 2px solid #00FFFF
`

export const Count = styled.span<{ reachedMaxValue: boolean }>`
    font-size: 36px;
    color: ${({ reachedMaxValue }) => (reachedMaxValue ? "red" : "#0A0A0A")};
    margin-bottom: 16px;
`;

export const ApplyButton = styled.button<{ disabled: boolean }>`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "#3772FF")};
    color: #fff;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    border: none;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
        background-color: ${({ disabled }) =>
            disabled ? "lightgray" : "#0077ff"};
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
    margin: 0 8px;
`;
