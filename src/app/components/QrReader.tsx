'use client'
import React from 'react';
import {QrReader} from "react-qr-reader";

interface QrReaderProps {
    onScan: (data: string | null) => void;
    onResult: (data: string | null) => void;
    onError: (error: any) => void;
}

const QrReaderComponent: React.FC<QrReaderProps> = ({ onScan, onError, onResult }) => {
    return (
        <QrReader
            delay={300}
            onError={onError}
            onScan={onScan}
            onResult={onResult}
            style={{ width: '100%' }}
        />
    );
};

export default QrReaderComponent;
