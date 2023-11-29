import {deleteDevice} from "@/app/auth/apiUtils";

// DeviceComponent.tsx
import React, { useState, useEffect } from 'react';

interface DeviceComponentProps {
    deviceId: string;
}

interface DeviceData {
    name: string;
    type: string;
}

const DeviceComponent: React.FC<DeviceComponentProps> = ({ deviceId }) => {
    const [deviceData, setDeviceData] = useState<DeviceData | null>(null);

    return (
        <div>
            {deviceData ? (
                <div>
                    <h2>Name: {deviceData.name}</h2>

                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DeviceComponent;
