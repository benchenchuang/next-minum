/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2024-01-07 18:59:52
 * @LastEditTime: 2024-01-07 20:00:29
 * @FilePath: /minum-website/src/app/_components/home_summarize.tsx
 */
import React from 'react'
import { Image } from '@nextui-org/react'

const headData = [
    {
        num:'90%',
        name:'数据非结构化',
        from:'IDC报告',
        icon:'/images/home/data-structure.svg'
    }
]
const dataList = [
    {
        num:'＞80%',
        name:'企业数据是暗数据',
        from:'Mircosoft',
        icon:'/images/home/company-data.svg'
    },
    {
        num:'67%',
        name:'数据泄露源自非结构化',
        from:'IBM Security',
        icon:'/images/home/data-leak.svg'
    },
    {
        num:'＜5%',
        name:'全球关注非结构化数据安全的公司',
        from:'Forbes',
        icon:'/images/home/data-global.svg'
    },{
        num:'≈0',
        name:'关注生成式人工智能安全',
        from:'Gartner',
        icon:'/images/home/ai-security.svg'
    }
]

const HomeSummarize = () => {
  return (
    <div className='bg-block-light relative w-full flex flex-col items-center'>
        <div className='max-w-[1200px] py-[100px] flex flex-row gap-1'>
            {
                headData.map((head,index)=>{
                    return(
                        <div className='bg-block-grey relative text-white  px-[50px] py-[30px] flex-[360px]' key={index}>
                            <img
                                className='absolute right-[21px] top-[27px] max-w-[88px] z-10'
                                src={head.icon}
                                alt={head.name}/>
                            <p className='text-[48px] pt-[50px]'>{head.num}</p>
                            <p className='text-[30px] pt-[90px]'>{head.name}</p>
                            <p className='text-[14px] text-[#B9C5DC] pt-[60px]'>数据来源{head.from}</p>
                        </div>
                    )
                })
            }
            
            <div className='flex flex-row flex-wrap gap-1'>
                {
                    dataList.map((item,index)=>{
                        return(
                            <div className='bg-block-grey relative text-[#353535] text-right px-[40px] py-[20px] flex-[415px]' key={index}>
                                <p className='text-[36px]'>{item.num}</p>
                                <p className='text-[20px] mt-[30px]'>{item.name}</p>
                                <p className='text-[14px] text-[#7C90A3] mt-[17px]'>数据来源{item.from}</p>
                                <img
                                    className='absolute left-[40px] top-[30px] z-10'
                                    src={item.icon}
                                    alt={item.name} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        {/* <Image
            className='w-full'
            src='/images/home/summarize_bg.png'
            alt='新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障新一代数据资产安全保护引领者，为用户提供最可靠的数据安全保障'/> */}
    </div>
  )
}

export default HomeSummarize