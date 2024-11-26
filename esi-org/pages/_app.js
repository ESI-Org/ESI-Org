import "@/styles/globals.css";

import '@rainbow-me/rainbowkit/styles.css';

import {
 getDefaultConfig,
 RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
 mainnet,
 polygon,
 holesky,
 optimism,
 arbitrum,
 base,
} from 'wagmi/chains';
import {
 QueryClientProvider,
 QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
 appName: 'My RainbowKit App',
 projectId: 'YOUR_PROJECT_ID',
 chains: [mainnet, polygon, holesky, optimism, arbitrum, base],
 ssr: true, // If your dApp uses server side rendering (SSR)
});

export default function App({ Component, pageProps }) {

 const queryClient = new QueryClient();
 return (
 <WagmiProvider config={config}>
 <QueryClientProvider client={queryClient}>
 <RainbowKitProvider>
 <Component {...pageProps} />
 </RainbowKitProvider>
 </QueryClientProvider>
 </WagmiProvider>
 );
}