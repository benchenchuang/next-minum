'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Input, Select, SelectItem, Textarea, Button, Spinner } from "@nextui-org/react";
import Captcha from 'react-captcha-code';
import { originalCharacter, randomNum } from '@/libs/code';
import toast from 'react-hot-toast';
import { addInfo } from '@/api/consult';

const SupportForm = () => {
    const animals = [
        { label: "产品", value: "产品", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", value: "elephant", description: "The largest land animal" },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
    ]
    //获取验证码
    const getCodeString = ()=>{
        let str = "";
        for (let i = 0; i < 4; i++) {
            const temp =
                originalCharacter[randomNum(0, originalCharacter.length - 1)];
            str = `${str}${temp}`;
        }
        return str;
    }
    //变换code验证码
    const handleClick = useCallback(() => {
        let str = getCodeString();
        setCode(str);
    }, []);
    //表单数据
    const initForm = {
        companyName:'',
        type:'产品',
        user:'',
        phone:'',
        email:'',
        comment:'',
        code:''
    }

    const [code, setCode] = useState<string>(getCodeString() as string);
    const [form,setForm] = useState(initForm);
    const formCurrent = useRef(initForm)
    // true 有误 提示  false 正常
    const [isCompanyInvalid,setCompanyInvalid] = useState<boolean>(false)
    const [isTypeInvalid,setTypeInvalid] = useState<boolean>(false)
    const [isUserInvalid,setUserInvalid] = useState<boolean>(false)
    const [isPhoneInvalid,setPhoneInvalid] = useState<boolean>(false)
    const [isEmailInvalid,setEmailInvalid] = useState<boolean>(false)
    const [isCommentInvalid,setCommentInvalid] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(false)
    //更新form数据
    const updateFormData = (type:string,value:string)=>{
        setForm({...form,[type]:value});
        formCurrent.current = {...form,[type]:value};
    }
    //选择需求类型
    const changeType = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        let {value} = e.target;
        updateFormData('type',value)
    }
    //输入框更新内容
    const changeInput =(e: React.ChangeEvent<HTMLInputElement>,type:string)=>{
        let {value} = e.target;
        let getValue = value.trim();
        if(type=='companyName'){
            if(!getValue){
                setCompanyInvalid(true)
            }else{
                setCompanyInvalid(false)
            }
        }
        if(type=='user'){
            if(!getValue){
                setUserInvalid(true)
            }else{
                setUserInvalid(false)
            }
        }
        if(type=='phone'){
            if(!getValue || !validatePhone(getValue)){
                setPhoneInvalid(true)
            }else{
                setPhoneInvalid(false)
            }
        }
        if(type=='email'){
            if(!getValue || !validateEmail(getValue)){
                setEmailInvalid(true)
            }else{
                setEmailInvalid(false)
            }
        }
        if(type=='comment'){
            if(getValue.length>20){
                setCommentInvalid(true)
            }else{
                setCommentInvalid(false)
            }
        }
        updateFormData(type,getValue)
    }
    //验证邮箱
    const validateEmail = (value:string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    //验证手机号
    const validatePhone = (value:string) => value.match(/^1[3456789]\d{9}$/);
    //提交
    const submit = async()=>{
        let current = formCurrent.current;
        let userCode = current.code;
        let {companyName,user,phone,email,type,comment} = current;
        if(!companyName || isCompanyInvalid){
            toast.error('请输入企业名称')
            return false;
        }
        if(!user || isUserInvalid){
            toast.error('请输入您的姓名')
            return false;
        }
        if(!phone || isPhoneInvalid){
            toast.error('请输入正确的手机号')
            return false;
        }
        if(!email || isEmailInvalid){
            toast.error('请输入正确的邮箱')
            return false;
        }
        if(code!==userCode){
            toast.error('验证码不正确')
            return false;
        }
        try{
            setLoading(true)
            let res = await addInfo({companyName,type,user,phone,email,comment});
            toast.success('提交成功！')
            setForm(initForm)
            formCurrent.current = {...initForm}
            window.location.reload();
        }finally{
            setLoading(false)
        }
    }

    return (
        <>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right sm:mr-[15px] md:mr-[30px] sm:text-[14px] md:text-[18px] sm:w-[60px] md:w-[80px] font-[400]'>企业名称</span>
                <div className='flex-1'>
                    <Input
                        aria-label='企业名称'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        defaultValue={form.companyName}
                        placeholder='请输入企业名称'
                        isInvalid={isCompanyInvalid}
                        color={isCompanyInvalid ?"danger":"default"}
                        errorMessage={isCompanyInvalid && "请输入正确的企业名称"}
                        onChange={e=>changeInput(e,'companyName')}
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right sm:mr-[15px] md:mr-[30px] sm:text-[14px] md:text-[18px] sm:w-[60px] md:w-[80px] font-[400]'>需求类别</span>
                <div className='flex-1'>
                    <Select
                        aria-label='需求类别'
                        placeholder="请选择需求类别"
                        isInvalid={isTypeInvalid}
                        defaultSelectedKeys={[form.type]}
                        color={isTypeInvalid ?"danger":"default"}
                        errorMessage={isTypeInvalid && "请选择合适的需求类别"}
                        onChange = {e=>changeType(e)}
                        >
                        {
                            animals.map(animal => {
                                return (
                                    <SelectItem key={animal.value} value={animal.value} description={animal.description}>
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
                <span className='text-[#666666] text-right sm:mr-[15px] md:mr-[30px] sm:text-[14px] md:text-[18px] sm:w-[60px] md:w-[80px] font-[400]'>联系人</span>
                <div className='flex-1'>
                    <Input
                        aria-label='联系人'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        maxLength={20}
                        placeholder='请填写您的姓名'
                        defaultValue={form.user}
                        isInvalid={isUserInvalid}
                        color={isUserInvalid ?"danger":"default"}
                        errorMessage={isUserInvalid && "请填写您的姓名"}
                        onChange={e=>changeInput(e,'user')}
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right sm:mr-[15px] md:mr-[30px] sm:text-[14px] md:text-[18px] sm:w-[60px] md:w-[80px] font-[400]'>联系方式</span>
                <div className='flex-1'>
                    <Input
                        aria-label='联系方式'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        maxLength={11}
                        placeholder='请填写您的手机号码'
                        defaultValue={form.phone}
                        isInvalid={isPhoneInvalid}
                        color={isPhoneInvalid ?"danger":"default"}
                        errorMessage={isPhoneInvalid && "请填写正确的手机号码"}
                        onChange={e=>changeInput(e,'phone')}
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row items-center mb-[50px]'>
                <span className='text-[#666666] text-right sm:mr-[15px] md:mr-[30px] sm:text-[14px] md:text-[18px] sm:w-[60px] md:w-[80px] font-[400]'>邮箱地址</span>
                <div className='flex-1'>
                    <Input
                        aria-label='邮箱地址'
                        className='h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        placeholder='请填写您的邮箱'
                        defaultValue={form.email}
                        isInvalid={isEmailInvalid}
                        color={isEmailInvalid ?"danger":"default"}
                        errorMessage={isEmailInvalid && "请填写正确的邮箱"}
                        onChange={e=>changeInput(e,'email')}
                    />
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'>*</span>
            </div>
            <div className='flex flex-row mb-[50px]'>
                <span className='text-[#666666] mt-[10px] text-right sm:mr-[15px] md:mr-[30px] sm:text-[14px] md:text-[18px] sm:w-[60px] md:w-[80px] font-[400]'>留言区</span>
                <div className='flex-1 flex flex-col sm:mr-[15px] md:mr-[20px]'>
                    <div className='relative'>
                        <Textarea
                            aria-label='留言区'
                            type="text"
                            minRows={4}
                            radius="sm"
                            label=""
                            maxLength={200}
                            defaultValue={form.comment}
                            placeholder='请填写您的留言（字数限制200字）'
                            isInvalid={isCommentInvalid}
                            color={isCommentInvalid ?"danger":"default"}
                            errorMessage={isCommentInvalid && "留言字数超出200字"}
                            onChange={e=>changeInput(e,'comment')}
                        />
                        <span className='absolute text-[#999] font-[300] text-[14px] right-[20px] bottom-[15px]'>{formCurrent.current.comment.length}/200</span>
                    </div>
                    <p className='text-[#999] mt-[10px] text-[14px]'>表格提交成功后,我们会在一个工作日内联系您</p>
                </div>
            </div>
            <div className='flex flex-row items-center mb-[77px]'>
                <span className='text-[#666666] text-right shrink-0 sm:mr-[15px] md:mr-[30px] sm:text-[14px] md:text-[18px] sm:w-[60px] md:w-[80px] font-[400]'>验证码</span>
                <div className='flex-1 flex flex-row'>
                    <Input
                        aria-label='验证码'
                        className='sm:w-[160px] md:w-[250px] sm:mr-[15px] md:mr-[30px] h-[55px]'
                        type="text"
                        radius="sm"
                        label=""
                        maxLength={4}
                        defaultValue={form.code}
                        placeholder='验证码'
                        onChange={e=>changeInput(e,'code')}
                    />
                    <div className='flex-1'>
                        <Captcha
                            onClick={handleClick}
                            code={code}
                            fontSize={30}
                            bgColor='#F2F2F2'
                            className="text-black sm:w-full md:w-[200px] h-[55px] rounded-[5px]" />
                    </div>
                </div>
                <span className='text-[#f00] ml-[10px] text-[20px]'></span>
            </div>
            <div className='flex flex-row justify-center mb-[50px]'>
                <Button
                    radius="sm"
                    className='bg-[#153E8B] text-white w-[150px] h-[55px] text-[20px]'
                    onClick={submit}>提交</Button>
            </div>
            {
                loading && (
                    <div className='bg-white fixed left-0 top-0 right-0 bottom-0 z-50 flex flex-row justify-center items-center'>
                        <Spinner label="提交信息..."></Spinner>
                    </div>
                )
            }
        </>
    )
}

export default SupportForm