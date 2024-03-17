import React, { useState, useEffect } from "react";
import {
    AppContainer,
    ApplyButton,
    Button,
    ButtonContainer,
    ButtonWrapper,
    Count,
    CountContainer,
    CounterContainer,
    ErrorMessage,
    Input,
    Label,
    SettingsContainer,
} from "./components";

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
                <CountContainer>
                    <Count reachedMaxValue={reachedMaxValue}>{count}</Count>
                </CountContainer>
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
