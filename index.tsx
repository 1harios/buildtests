import { Button, Frog } from 'frog';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const app = new Frog();

const FrameComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [wallet, setWallet] = useState(null);

  const fetchWallet = async () => {
    const warpcastApiUrl = 'https://api.warpcast.com/v2/user-by-username?username=your_username';
    try {
      const response = await axios.get(warpcastApiUrl);
      const fid = response.data.result.user.fid;
      const addressResponse = await axios.get(`https://api.warpcast.com/v2/verifications?fid=${fid}`);
      const walletAddress = addressResponse.data.result.verifications[0].address;
      setWallet(walletAddress);
    } catch (err) {
      setError('Error fetching wallet from WarpCast');
      console.error(err);
    }
  };

  const fetchData = async () => {
    if (!wallet) {
      setError('Wallet address is not defined');
      return;
    }

    const apiUrl = `https://build.top/api/stats?wallet=${wallet}`;
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (err) {
      setError('Error fetching data from Build API');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  return (
    <div style={{ color: 'white', display: 'flex', flexDirection: 'column', fontSize: 20 }}>
      <Button onClick={fetchData}>Fetch Data</Button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <div>Build Score: {data.build_score}</div>
          <div>Build Budget: {data.build_budget}</div>
          <div>Nominations Received: {data.nominations_received}</div>
          <div>Nominations Given: {data.nominations_given}</div>
        </div>
      )}
    </div>
  );
};

app.frame('/', (c) => {
  return c.res({
    image: <FrameComponent />,
  });
});
