'use client'
import React from 'react'
import { Input, Select, SelectItem, Textarea, Button } from "@nextui-org/react";

const SupportForm = () => {
    const animals = [
        { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", value: "elephant", description: "The largest land animal" },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
    ]
    return (
        <>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right mr-[30px] text-[18px] w-[80px] font-[400]'>企业名称</span>
                <div className='flex-1'>
                    <Input
                        aria-label='企业名称'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        placeholder='请输入企业名称'
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right mr-[30px] text-[18px] w-[80px] font-[400]'>需求类别</span>
                <div className='flex-1'>
                    <Select
                        aria-label='需求类别'
                        placeholder="请选择需求类别">
                        {
                            animals.map(animal => {
                                return (
                                    <SelectItem key={animal.value} value={animal.value}>
                                        {animal.label}
                                    </SelectItem>
                                )
                            })
                        }
                    </Select>
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right mr-[30px] text-[18px] w-[80px] font-[400]'>联系人</span>
                <div className='flex-1'>
                    <Input
                        aria-label='联系人'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        placeholder='请填写您的姓名'
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right mr-[30px] text-[18px] w-[80px] font-[400]'>联系方式</span>
                <div className='flex-1'>
                    <Input
                        aria-label='联系方式'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        placeholder='请填写您的手机号码'
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right mr-[30px] text-[18px] w-[80px] font-[400]'>邮箱地址</span>
                <div className='flex-1'>
                    <Input
                        aria-label='邮箱地址'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        placeholder='请填写您的邮箱'
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row mb-[50px]'>
                <span className='text-[#666666] mt-[10px] text-right mr-[30px] text-[18px] w-[80px] font-[400]'>留言区</span>
                <div className='flex-1 flex flex-col'>
                    <div className='relative'>
                        <Textarea
                            aria-label='留言区'
                            type="text"
                            minRows={4}
                            radius="sm"
                            label=""
                            placeholder='请填写您的留言（字数限制200字）'
                        />
                        <span className='absolute text-[#999] font-[300] text-[14px] right-[20px] bottom-[15px]'>0/200</span>
                    </div>
                    <p className='text-[#999] mt-[10px] text-[14px]'>表格提交成功后,我们会在一个工作日内联系您</p>
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'></span>
            </div>
            <div className='flex flex-row items-center mb-[77px]'>
                <span className='text-[#666666] text-right mr-[30px] text-[18px] w-[80px] font-[400]'>验证码</span>
                <div className='flex-1 flex flex-row'>
                    <Input
                        aria-label='验证码'
                        className='w-[250px] mr-[30px] h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        placeholder='验证码'
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'></span>
            </div>
            <div className='flex flex-row justify-center mb-[50px]'>
                <Button radius="sm" className='bg-[#153E8B] text-white w-[150px] h-[55px] text-[20px]'>提交</Button>
            </div>
        </>
    )
}

export default SupportForm