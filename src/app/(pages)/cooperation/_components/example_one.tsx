/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 19:56:49
 * @LastEditTime: 2024-01-17 21:51:34
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/example_one.tsx
 */
import React from 'react'
import OneConstruction from './one_contruction'
import OnePoints from './one_points'
import OneBenefits from './one_benefits'
import OneService from './one_service'

const ExampleOne = () => {
  return (
    <div>
        <OneConstruction/>
        <OnePoints/>
        <OneBenefits />
        <OneService/>
    </div>
  )
}

export default ExampleOne