"use client"
import React, { useEffect, useState } from "react";
import TopBar from "@/app/components/TopBar";
import { fetchDataWithToken, fetchTemperatureData2 } from "../../auth/apiUtils";
import DevicesCard from "@/app/components/DevicesCard";
import ChartComponent from "@/app/components/ChartComponent";

const Page = () => {
  const [deviceData, setDeviceData] = useState<{ id: string; /* other properties */ }[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");
  const [selectedDeviceData, setSelectedDeviceData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchDataWithToken()
      .then((response) => {
        if (Array.isArray(response)) {
          setDeviceData(response);
        } else {
          console.error("Data from fetchDataWithToken is not an array.");
          setDeviceData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeviceSelection = (deviceId: string) => {
    setLoading(true);
    setSelectedDeviceId(deviceId);

    fetchTemperatureData2(deviceId)
      .then((data) => {
        setSelectedDeviceData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching device data:", error);
        setLoading(false);
      });
  };

  return (
    <div className="main">
      <TopBar />
      <div className="alignment">
        {loading ? (
          <p>Loading...</p>
        ) : selectedDeviceData ? (
          <div>
            <ChartComponent devicenumber={selectedDeviceId} />
          </div>
        ) : (
            <div>
            <h2>All your devices: </h2>
            {deviceData.map((room, id) => (
              <div key={id} onClick={() => handleDeviceSelection(room.id)}>
                <DevicesCard id={room.id} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
