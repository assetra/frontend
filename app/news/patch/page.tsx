import PatchList from '@/components/news/patchList'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Patch List",
};

const page = () => {
  return (
    <PatchList />
  )
}

export default page