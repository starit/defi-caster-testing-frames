/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FrameRequest, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { getReturnFrame } from '..';

// Todo:: finish the Mockup
const swapForUser = async(amount) => {
    return true
}

async function getResponse(req: NextRequest): Promise<NextResponse> {
    const body: FrameRequest = await req.json();
    console.log('post received', body)
    // const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });
    // if (!isValid) {
    //     return new NextResponse('Message not valid', { status: 500 });
    // }
    const buttonIndex = body.untrustedData.buttonIndex;
    if (buttonIndex == 2) {
        return getReturnFrame();
    }

    const amountToBeSwaped = body.untrustedData.inputText
    console.log('user want to swap', amountToBeSwaped, 'USDC to ETH')
    const result = await swapForUser(amountToBeSwaped)
    // Todo:: handle result

    return new NextResponse(
        // Todo:: remove mock up data
        getFrameHtmlResponse({
            buttons: [
                {
                    label: 'Transaction Finished'
                },
                {
                    action: 'link',
                    label: 'Tx ID: 0x5a643e26061274f4e2a02bfa1e3ebde35f16d2c50cdcfe03881e9106b2595250',
                    target: 'https://etherscan.io/tx/0x5a643e26061274f4e2a02bfa1e3ebde35f16d2c50cdcfe03881e9106b2595250'
                },
            ],
            image: {
                src: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/release/v-0-12.png`,
            },
            postUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/frame/uniswap`,
            state: {
                time: new Date().toISOString(),
            },
        }),
    );
}

export async function POST(req: NextRequest): Promise<Response> {
    return getResponse(req);
}

export const dynamic = 'force-dynamic';