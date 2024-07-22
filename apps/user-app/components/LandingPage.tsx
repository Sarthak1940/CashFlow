"use client"
import { Button } from "@repo/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
export const LandingPage = () => {
  return <div className="w-screen font-serif">
    <div>
      <HeroSection/>
    </div>
    <div>
      <PayFriends/>
    </div>
    <div>
      <ShopBrands/>
    </div>
    <div>
      <ManageMoney/>
    </div>
    <div>
      <GrowBusiness/>
    </div>
    <div>
      <TermsAndConditions/>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
}



function HeroSection() {
  const router = useRouter()
  return <div className="flex justify-center gap-12 py-20 px-12">
    <div>
      <p className="text-[3.5rem] leading-[3.2rem] mb-5 font-serif">Fast, safe,
        <br/> social
        <br/> payments</p>
      <p className="text-[1.25rem] font-sans mb-5">Pay, get paid, grow a business, and more. 
        <br/>Join the tens of millions of people on EzyPay.</p>

      <Button onClick={() =>{router.push("/api/auth/signin")}} disabled={false} colour="text-white bg-[#7132f5] hover:bg-[#6a51a6]">Sign up</Button>
    </div>
    <div className="relative w-[640px] h-auto">
      <Image src="/home-hero.webp" alt="hero" priority layout="responsive" width={500} height={500}/>
    </div> 
  </div>
}

function PayFriends() {
  const router = useRouter()
  return <div className="bg-white py-40 pb-[36rem] px-12 pl-64">
    <div>
      <p className="text-[3.5rem] leading-[3.2rem] mb-5 font-sans">Pay Friends</p>

      <p className="text-[1.2rem] font-sans mb-5">EzyPay helps settling up feel more like catching up. Send and receive money <br/> with EzyPay friends to split everyday necessities, bills, and <br/> shared activities like takeout or travel.</p>

      <p className="text-[1.2rem] font-sans mb-5">Need a gift? Keep it simple and make any payment feel extra special <br/> with EzyPay.</p>

      <Button onClick={() =>{router.push("/api/auth/signin")}} disabled={false} colour="text-white bg-[#7132f5] hover:bg-[#6a51a6]">Sign up</Button>
    </div>
    <div className="flex relative ">
      <Image src="/home-pay-friends-left.webp" alt="" width={320} height={320} className="absolute top-[6rem]"/>
      <Image src="/home-pay-friends-right.webp" alt="" width={450} height={450} className="absolute left-[28rem]"/>
    </div>
  </div>
}

function ShopBrands() {
  const router = useRouter()
  return <div className="flex justify-center gap-[8rem] py-20 px-12 items-center">
  <div>
    <Image src="/home-check-out-at-your-favorite-brands.webp" alt="hero" loading="lazy" width={500} height={500}/>
  </div>
  <div>
    <p className="text-[3.5rem] leading-[3.2rem] mb-5 font-sans">Shop your favorite <br/> brands</p>
    <p className="text-[1.2rem] font-sans mb-5">Just like sending money to friends, you can use EzyPay
      <br/> to checkout at some of your favorite brands in-stores
      <br/> and online. Now getting repaid for last night’s dinner
      <br/> can cover this morning’s latte.</p>
    <p className="text-[1.2rem] font-sans mb-5">Digital gift cards are also available to send for last-
      <br/>minute gifts, special occasions, or just saying thanks. 
    </p>

    <Button onClick={() =>{router.push("/api/auth/signin")}} disabled={false} colour="text-white bg-[#7132f5] hover:bg-[#6a51a6]">Sign up</Button>
  </div> 
</div>
}

function ManageMoney() {
  return <div className="bg-white py-40 px-16">
  <div>
    <p className="text-[4.5rem] text-center leading-[3.2rem] mb-20 font-sans">Manage your money on EzyPay</p>
  </div>

  <div className="flex justify-center -ml-16">
    <div className="grid grid-cols-3 ml-16 gap-16 px-40">
      <div className="w-[100%]">
        <Image src="/home-manage-your-money-credit-card.webp" alt="" width={320} height={320} />
        <p className="text-center text-[2rem] font-sans mt-8">EzyPay Credit Card</p>
        <p className="text-center mt-6 font-sans text-[1.1rem] text-[#2f3033]">Earn up to 3% cash back on eligible purchases with the EzyPay Credit Card. There’s no annual fee, no limit to the cash back you can earn, and no impact to your credit score if declined.</p>
      </div>

      <div className="w-[100%]">
        <Image src="/home-manage-your-money-debit-card.webp" alt="" width={320} height={320}/>
        <p className="text-center text-[2rem] font-sans mt-8">EzyPay Debit Card</p>
        <p className="text-center mt-6 font-sans text-[1.1rem] text-[#2f3033]">Spend your balance in more places using the EzyPay Debit Card – all with no monthly fees or minimum balance requirements. You can even earn up to 5% cash back by activating offers in the app.</p>
      </div>

      <div className="w-[100%]">
        <Image src="/home-manage-your-money-venmo-for-ages.webp" alt="" width={320} height={320}/>
        <p className="text-center text-[2rem] font-sans mt-8">EzyPay for ages 13-17</p>
        <p className="text-center mt-6 font-sans text-[1.1rem] text-[#2f3033]">A debit card for teens, and EzyPay access to track their spending and send money to trusted friends and family. Plus, full parental visibility and controls. All with no minimum balance, no monthly fee.</p>
      </div>
    </div>
  </div>
</div>
}

function GrowBusiness() {
  const router = useRouter()
  return <div className="py-20 pb-[42rem] px-12 pl-64">
  <div>
    <p className="text-[4.5rem] leading-[4.5rem] mb-5 font-sans">Grow a <br/> Business</p>

    <p className="text-[1.2rem] font-sans mt-12 mb-5">Take business payments and engage customers with the<br/> help of a seamless checkout experience people already <br/> know and trust.</p>


    <Button onClick={() =>{router.push("/api/auth/signin")}} disabled={false} colour="text-white bg-[#7132f5] hover:bg-[#6a51a6]">Sign up</Button>
  </div>
  <div className="flex relative ">
    <Image src="/home-grow-a-business-left.webp" alt="" width={400} height={400} className="absolute top-[6rem]"/>
    <Image src="/home-grow-a-business-right.webp" alt="" width={400} height={400} className="absolute left-[28rem]"/>
  </div>
</div>
}

function TermsAndConditions() {
  return <div className="bg-white py-20 px-12 pl-64">
  <div className="w-[74%] pl-[8rem]">
    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">EzyPay account required. Eligibility requirements and terms apply.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">See EzyPay Credit Card Rewards Program Terms. Use of cash back is subject to the terms of the EzyPay User Agreement. </p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">See Terms & Rates for New Accounts.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">Application subject to credit approval. You must be at least 18 years old and reside in the US or its territories to apply. You must have a EzyPay account in good standing, that has been open for at least 30 days prior to application. An approved EzyPay Credit Card application will result in a hard credit inquiry, which may impact your credit bureau score.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">Each EzyPay Offer Powered by DOSH is available for a limited time only at participating merchants on qualifying purchases (as stated in the particular offer and subject to the full program terms). By participating, you agree that DOSH may create a wallet for you on its system in order for you to earn and redeem EzyPay Offers. Any EzyPay Offer that you earn will be transferred to your EzyPay account. All offers made available to you may become unavailable without notice. Additional terms and exclusions apply. See full EzyPay Offers Powered by Dosh Terms of Service and Privacy Policy here.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">The EzyPay Teen Account is available for eligible users 13-17 years old with parent or legal guardian sign up. Terms apply</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">PayPal Balance or EzyPay accounts required.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">When you buy or sell cryptocurrency on PayPal or EzyPay (including when you checkout with crypto on PayPal), Paypal or EzyPay will disclose an exchange rate and any fees you will be charged for that transaction. For currencies other than PYUSD, the exchange rate includes a spread that is earned on each purchase and sale.  Learn more about cryptocurrency fees on PayPal and EzyPay.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">Buying and selling cryptocurrency is subject to a number of risks and may result in significant losses. Please see PayPal’s disclosure and EzyPay’s disclosure for more details.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">PayPal and EzyPay do not make any recommendations regarding buying and or selling cryptocurrency. Consider seeking advice from your financial and tax advisor. Some custody, trading, and transfer services for cryptocurrency are performed for PayPal and EzyPay by our licensed service provider, Paxos Trust Company, LLC.  PayPal USD is issued by Paxos, not PayPal or EzyPay, and is subject to the Paxos US Dollar-Backed Stablecoin Terms and Conditions.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">Any cryptocurrencies you hold in your PayPal Balance or EzyPay account are not eligible for FDIC insurance.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">Cryptocurrency activity is not a regulated activity in many U.S. states and territories. PayPal, Inc. is licensed to engage in virtual currency business activity by the New York State Department of Financial Services. Buying, selling, transferring, and holding cryptocurrency with PayPal and EzyPay is not available in Hawaii and where prohibited by law.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">All cryptocurrency prices shown are for illustrative purposes only.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">The EzyPay Visa Credit Card is issued by Synchrony Bank pursuant to a license from Visa USA Inc. VISA is a registered trademark of Visa International Service Association and used under license.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">EzyPay Mastercard® is issued by The Bancorp Bank, N.A. pursuant to license by Mastercard International Incorporated. Card may be used everywhere Mastercard is accepted in the U.S. Mastercard and the circles design are registered trademarks of Mastercard International Incorporated. The Bancorp Bank, N.A. is issuer of the Card only and not responsible for the associated accounts or other products, services, or offers from EzyPay.</p>

    <p className="text-[0.9rem] text-[#55585e] font-sans mb-5">All trademarks and brand names belong to their respective owners. Use of these trademarks and brand names do not represent endorsement by or association with this card program. All rights reserved. Standard data rates from your wireless service provider may apply.</p>

  </div>
</div>
}

function Footer() {
  return <div className="grid grid-cols-4 font-sans px-12 pl-64 py-20 gap-y-12">
    <div>
      <p className="mb-3 text-[1.2rem]">Send & Recieve</p>
      <ul className="text-[#2f3033] text-[0.9rem]">
        <li>How it works</li>
        <li>Tips & Tricks</li>
        <li>Manage balance</li>
        <li>Direct Deposit</li>
      </ul>
    </div>

    <div>
      <p className="mb-3 text-[1.2rem]">Pay with EzyPay</p>
      <ul className="text-[#2f3033] text-[0.9rem]">
        <li>Ways to pay</li>
        <li>Pay businesses</li>
        <li>Pay in apps & online</li>
        <li>Pay in stores</li>
        <li>EzyPay Debit Card</li>
        <li>EzyPay Credit Card</li>
      </ul>
    </div>

    <div>
      <p className="mb-3 text-[1.2rem]">EzyPay for Business</p>
      <ul className="text-[#2f3033] text-[0.9rem]">
        <li>Ways to get paid</li>
        <li>Accept EzyPay payments</li>
        <li>Accept EzyPay in apps & online</li>
      </ul>
    </div>

    <div>
      <p className="mb-3 text-[1.2rem]">Help Center</p>
    </div>

    <div>
      <p className="mb-3 text-[1.2rem]">Resources</p>
      <ul className="text-[#2f3033] text-[0.9rem]">
        <li>Why EzyPay</li>
        <li>Trust & safety</li>
        <li>Our fees</li>
        <li>Developers</li>
      </ul>
    </div>

    <div>
      <p className="mb-3 text-[1.2rem]">Company</p>
      <ul className="text-[#2f3033] text-[0.9rem]">
        <li>About us</li>
        <li>Jobs</li>
        <li>Accessibility</li>
        <li>Media inquiries</li>
        <li>Blog</li>
      </ul>
    </div>

    <div>
      <p className="mb-3 text-[1.2rem]">Legal</p>
      <ul className="text-[#2f3033] text-[0.9rem]">
        <li>Terms</li>
        <li>Privacy</li>
        <li>Cookies</li>
      </ul>
    </div>

    <div className="mb-3 text-[1.2rem]">
      <p>Contact us</p>
    </div>
  </div>
}