'use client'
import React, { useState } from 'react';
import QrReaderComponent from "@/app/components/QrReader";
import TopBar from "@/app/components/TopBar";
const Page = () => {
    const [isScannerOpen, setIsScannerOpen] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const handleScan = (data: string | null) => {
        if (data) {
            setResult(data);
        }
    };
    const handleError = (error: any) => {
        console.error(error);
    };
    const openScanner = () => {
        setIsScannerOpen(true);
    };
    const closeScanner = () => {
        setIsScannerOpen(false);
        setResult(null);
    };
    return (
        <div className="main">
            <TopBar/>
            {!isScannerOpen && (
                <button className="formButton customButton" onClick={openScanner}>Open QR Scanner</button>
            )}

            {isScannerOpen && (
                <div>
                    <QrReaderComponent onScan={handleScan} onError={handleError} />

                    <button className="formButton customButton" onClick={closeScanner}>Close QR Scanner</button>

                    {result && <p>QR Code Result: {result}</p>}
                </div>
            )}
        </div>
    );
};

export default Page;
