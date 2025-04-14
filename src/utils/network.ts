import NetInfo from '@react-native-community/netinfo';
import { useEffect, useMemo, useState } from 'react';

export const NetworkStatus = (
    setIsNotConnected: (state: boolean) => void
) => {

  useMemo(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsNotConnected(!state.isConnected);
    });

    NetInfo.fetch().then(state => {
        setIsNotConnected(!state.isConnected);
    });

    return () => unsubscribe();
  },[setIsNotConnected]);
};