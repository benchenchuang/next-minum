/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-11 21:56:53
 * @FilePath: /minum-website/src/app/page.tsx
 */
import BannerShow from '@/components/BannerShow'
import HomeSummarize from './_components/home_summarize'
import ProductIntroduction from './_components/product_introduction'
import ProductDesign from './_components/product_design'

export default function Home() {
    // useEffect(()=>{
    //     wowInit()
    // },[])
    return (
        <div>
            <BannerShow isImage={false}/>
            <HomeSummarize />
            <ProductIntroduction/>
            <ProductDesign />
            {/* <section className="wow slideInLeft">ssssss</section>
            <section className="wow slideInRight">dddddd</section> */}
        </div>
    )
}
