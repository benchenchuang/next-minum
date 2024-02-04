/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-02-04 10:33:49
 * @LastEditTime: 2024-02-04 15:49:04
 * @FilePath: /minum-website/src/app/(pages)/product/_components/page_wrap.tsx
 */
'use client'
import React, { useState } from 'react'
import ExampleSwitch from './switch'
import MSYModule from './msy'
import MSSKModule from './mssk'

const PageWrap = () => {
    const [showType,setShowType] = useState<number>(0)
    const switchType = (type:number)=>{
        setShowType(type)
    }
    
    return (
        <div>
            <ExampleSwitch switchExample={switchType} type={showType}/>
            <div className='mt-[24px]'>
                {
                    showType==0 ? <MSYModule />:<MSSKModule/>
                }
            </div>
        </div>
    )
}

export default PageWrap