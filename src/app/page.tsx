/*
 * @Author: Jimmy
 * @LastModifiedBy: Jimmy
 * @Date: 2023-12-23 22:15:45
 * @LastEditTime: 2024-01-09 21:33:23
 * @FilePath: /minum-website/src/app/page.tsx
 */
import BannerShow from '@/components/BannerShow'
import HomeSummarize from './_components/home_summarize'
import ProductIntroduction from './_components/product_introduction'

export default function Home() {
    // useEffect(()=>{
    //     wowInit()
    // },[])
    return (
        <div>
            <BannerShow/>
            <HomeSummarize />
            <ProductIntroduction/>
            {/* <section className="wow slideInLeft">ssssss</section>
            <section className="wow slideInRight">dddddd</section> */}
        </div>
    )
}
