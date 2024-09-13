import React from 'react'
import { AarcFundKitModal } from '@aarc-xyz/fundkit-web-sdk' // Replace with the correct import path

const exchangeScreenTitle = 'Exchange Screen Title' // Replace with a valid value

const config = {
  appName: 'Assetra',
  module: {
    exchange: {
      enabled: true,
    },
    onRamp: {
      enabled: true,
      onRampConfig: {
        exchangeScreenTitle: exchangeScreenTitle,
      },
    },
    bridgeAndSwap: {
      enabled: true,
      fetchOnlyDestinationBalance: false,
      routeType: 'Value',
    },
  },
  apiKeys: {
    aarcSDK: '196a301b-705f-459a-a527-6978af53e3e2',
  },
  events: {
    onTransactionSuccess: (data: any) => {
      console.log('client onTransactionSuccess', data)
    },
    onTransactionError: (data: any) => {
      console.log('client onTransactionError', data)
    },
    onWidgetClose: () => {
      console.log('client onWidgetClose')
    },
    onWidgetOpen: () => {
      console.log('client onWidgetOpen')
    },
  },
  origin: window?.location?.origin,
}

const aarcModal = new AarcFundKitModal(config)
aarcModal.init()

function openArc() {
  aarcModal.openModal()
}

const Fund: React.FC = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <div className='xs:flex-col flex gap-x-8 gap-y-8 md:flex-row'>
        <button
          onClick={openArc}
          className='bg-base h-[42px] w-[424px] border-none p-0'
        >
          <span className='text-caption1 font-medium text-main'>
            Initiate Funding
          </span>
        </button>
      </div>
    </div>
  )
}

export default Fund
