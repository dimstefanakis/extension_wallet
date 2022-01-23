import React from "react";
import {render, screen} from '@testing-library/react';
import ViaEmail from '../ViaEmail';

describe('RegisterViaEmail', () => {
    render(<ViaEmail/>);
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(2);

    const emailInput = screen.getByPlaceholderText("johndoe@gmail.com");
    expect(emailInput).toBeTruthy();

    const continueButton = screen.getByText('Continue');
    expect(continueButton).toBeTruthy();
})
