import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextResponse } from 'next/server';

// Uniswap Initial Frame
// Todo:: support more currencies
export async function getFrame0() {

    return new NextResponse(
        getFrameHtmlResponse({
            input: {
                text: 'How much USDC for ETH?'
            },
            buttons: [
                {
                    action: 'post',
                    label: 'Swap',
                },
                {
                    label: 'Return',
                    action: 'post',
                },
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
                aspectRatio: '1:1',
            },
            postUrl: process.env.NEXT_PUBLIC_WEBSITE_URL as string + '/api/frame/uniswap/swapConfirm',
            ogTitle: 'DeFiCaster - Uniswap',
            ogDescription: 'Simplify DeFi interactions through web3 social payment layer',
        }),
    );
}

export async function getReturnFrame() {

    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'Entry - Choose a service',
                },
                {
                    action: 'post',
                    label: 'Lending - Compound',
                },
                {
                    action: 'post',
                    label: 'Margin - Dydx',
                },
                {
                    action: 'post',
                    label: 'Swap - Uniswap',
                },
            ],
            image: {
                src: 'https://zizzamia.xyz/park-3.png',
                aspectRatio: '1:1'
            },
            postUrl: process.env.NEXT_PUBLIC_WEBSITE_URL as string + '/api/frame'
        }),
    );
}

export async function getTBDFrame() {
    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'TBD',
                },
                {
                    action: 'post',
                    label: 'Return',
                }
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
            },
            postUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/frame/entry`,
            state: {
                time: new Date().toISOString(),
            },
        }),
    );
}


export async function getErrorFrame(message = '') {
    return new NextResponse(
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'An error occured',
                },
                {
                    label: message
                },
                {
                    action: 'post',
                    label: 'Return',
                }
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
            },
            postUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/frame/entry`,
            state: {
                time: new Date().toISOString(),
            },
        }),
    );
}