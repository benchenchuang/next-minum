/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-14 19:52:54
 * @LastEditTime: 2024-01-18 19:54:35
 * @FilePath: /minum-website/src/app/(pages)/cooperation/_components/page_wrap.tsx
 */
'use client'
import React, { useState } from 'react'
import ExampleSwitch from './exmaple_switch'
import ExampleOne from './example_one'
import ExampleTwo from './exmaple_two'

const PageWrap = () => {
    const [showType,setShowType] = useState<number>(1)
    const switchType = (type:number)=>{
        setShowType(type)
    }
    
    return (
        <div>
            <ExampleSwitch switchExample={switchType} type={showType}/>
            <div className='mt-[24px]'>
                {
                    showType==0 ? <ExampleOne />:<ExampleTwo/>
                }
            </div>
        </div>
    )
}

export default PageWrap