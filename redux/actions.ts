import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface State {
	address: string;
	offersActiveReceived: any;
	offersActiveMade: any;
	network: string;
	networkName: string;
	bottles: any[];
	exchange: string;
	typeOfWallet: string;
}
