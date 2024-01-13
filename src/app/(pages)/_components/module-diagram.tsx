/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-13 10:50:35
 * @LastEditTime: 2024-01-13 10:53:23
 * @FilePath: /minum-website/src/app/(pages)/_components/module-diagram.tsx
 */
import BlockHeader from '@/components/BlockHeader'
import React from 'react'

const ModuleDiagram = () => {
    let header = {
        title: '模块架构',
        en_title: 'Module architecture diagram',
        color:'#fff'
    }
    return (
        <div className='bg-diagram-module relative sm:py-[25px] md:py-[50px]'>
            <BlockHeader {...header} />
        </div>
    )
}

export default ModuleDiagram