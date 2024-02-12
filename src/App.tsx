import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10);
    const [minValueError, setMinValueError] = useState(false);
    const [maxValueError, setMaxValueError] = useState(false);
    const [settingsApplied, setSettingsApplied] = useState(false);

    useEffect(() => {
        const storedMinValue = localStorage.getItem("minValue");
        const storedMaxValue = localStorage.getItem("maxValue");

        if (storedMinValue && storedMaxValue) {
            setMinValue(parseInt(storedMinValue));
            setMaxValue(parseInt(storedMaxValue));
            setSettingsApplied(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("minValue", minValue.toString());
    }, [minValue]);

    useEffect(() => {
        localStorage.setItem("maxValue", maxValue.toString());
    }, [maxValue]);

    const handleApplySettings = () => {
        if (!minValueError && !maxValueError) {
            setSettingsApplied(true);
            setCount(minValue);
        }
    };

    const handleIncrement = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };

    const handleReset = () => {
        setCount(minValue);
    };

    const handleMinValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMinValue(value);
        if (value >= maxValue) {
            setMinValueError(true);
        } else {
            setMinValueError(false);
        }
    };

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setMaxValue(value);
        if (value <= minValue) {
            setMaxValueError(true);
        } else {
            setMaxValueError(false);
        }
    };

    const isIncrementDisabled = count >= maxValue;
    const reachedMaxValue = count === maxValue;

    return (
        <AppContainer>
            <SettingsContainer>
                <div>
                    <Label htmlFor="minValue">Start value</Label>
                    <Input
                        type="number"
                        id="minValue"
                        value={minValue}
                        onChange={handleMinValueChange}
                        error={minValueError}
                    />
                    {minValueError && (
                        <ErrorMessage>Error, wrong value!</ErrorMessage>
                    )}
                </div>
                <div>
                    <Label htmlFor="maxValue">Max value</Label>
                    <Input
                        type="number"
                        id="maxValue"
                        value={maxValue}
                        onChange={handleMaxValueChange}
                        error={maxValueError}
                    />
                    {maxValueError && (
                        <ErrorMessage>Error, wrong value!</ErrorMessage>
                    )}
                </div>
                <ButtonContainer>
                    <ApplyButton
                        onClick={handleApplySettings}
                        disabled={minValueError || maxValueError}
                    >
                        Set
                    </ApplyButton>
                </ButtonContainer>
            </SettingsContainer>
            <CounterContainer>
                <Count reachedMaxValue={reachedMaxValue}>{count}</Count>
                <ButtonWrapper>
                    <Button
                        onClick={handleIncrement}
                        disabled={isIncrementDisabled}
                    >
                        Inc
                    </Button>
                    <Button onClick={handleReset} disabled={count === minValue}>
                        Reset
                    </Button>
                </ButtonWrapper>
            </CounterContainer>
        </AppContainer>
    );
};

export default Counter;

const AppContainer = styled.div`
    background-color: #222;
    color: #00f;
    display: flex;
    justify-content: center;
    padding: 16px;
`;

const SettingsContainer = styled.div`
    background-color: #c69e9e;
    color: #00f;
    border: 2px solid #00f;
    border-radius: 8px;
    padding: 16px;
    margin-right: 16px;
`;

const CounterContainer = styled.div`
    background-color: #c69e9e;
    color: #00f;
    border: 2px solid #00f;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    margin-bottom: 8px;
`;

const Input = styled.input<{ error: boolean }>`
    border: 1px solid ${({ error }) => (error ? "red" : "#00f")};
    padding: 4px;
    margin-bottom: 16px;
`;

const ErrorMessage = styled.span`
    color: red;
    margin-bottom: 16px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 16px;
`;

const Button = styled.button<{ disabled: boolean }>`
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

const Count = styled.span<{ reachedMaxValue: boolean }>`
    font-size: 36px;
    color: ${({ reachedMaxValue }) => (reachedMaxValue ? "red" : "#00f")};
    margin-bottom: 16px;
`;

const ApplyButton = styled.button<{ disabled: boolean }>`
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

const ButtonWrapper = styled.div`
    display: flex;
    margin: 0 8px;
`;
