import styled from "styled-components";

export const AppContainer = styled.div`
    background-color: #222;
    color: #00f;
    display: flex;
    justify-content: center;
    padding: 16px;
`;

export const SettingsContainer = styled.div`
    background-color: #c69e9e;
    color: #00f;
    border: 2px solid #00f;
    border-radius: 8px;
    padding: 16px;
    margin-right: 16px;
`;

export const CounterContainer = styled.div`
    background-color: #c69e9e;
    color: #00f;
    border: 2px solid #00f;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    margin-bottom: 8px;
`;

export const Input = styled.input<{ error: boolean }>`
    border: 1px solid ${({ error }) => (error ? "red" : "#00f")};
    padding: 4px;
    margin-bottom: 16px;
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
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "#00f")};
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

export const Count = styled.span<{ reachedMaxValue: boolean }>`
    font-size: 36px;
    color: ${({ reachedMaxValue }) => (reachedMaxValue ? "red" : "#00f")};
    margin-bottom: 16px;
`;

export const ApplyButton = styled.button<{ disabled: boolean }>`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: ${({ disabled }) => (disabled ? "lightgray" : "#00f")};
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
