import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SquareOTPInput = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const newOtp = [...otp];

    function isNumber(value) {
        if (value >= 0 && value <= 9) {
            return true;
        }
        return false;
    }

    function focusSquare(index) {
        inputRefs[index].current.focus();
    }

    function assignKey(index, value) {
        newOtp[index] = value;
    }

    function handleAddKey(e, index, keyCode) {
        var value = keyCode - 48;

        if (isNumber(value)) {
            assignKey(index, value);
            if (e !== '' && index < 5) {
                focusSquare(index + 1);
            } else if (e === '' && index > 0) {
                focusSquare(index - 1);
            }
        }
    }

    function handleRemoveKey(e, index, keyCode) {
        if (keyCode == 8) {
            if (newOtp[index] == '') {
                focusSquare(index - 1);
                assignKey(index, '')
            } else if (index > 0) {
                assignKey(index, '');
                focusSquare(index - 1);
            } else {
                assignKey(index, '');
            }
        }
    }

    const handleOtpChange = (e, index) => {

        var keyCode = e.keyCode;

        handleAddKey(e, index, keyCode);

        handleRemoveKey(e, index, keyCode);

        setOtp(newOtp);

    };

    return (
        <View style={styles.otpContainer}>
            {otp.map((value, index) => (
                <TextInput
                    key={index}
                    style={styles.otpInputSquare}
                    value={value}
                    onKeyPress={(e) => handleOtpChange(e, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    ref={inputRefs[index]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    otpInputSquare: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default SquareOTPInput;