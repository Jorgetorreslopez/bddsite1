import { Footer, PageTitle } from "@/widgets/layout";
import { Link } from "react-router-dom";
import {
  Typography,
} from "@material-tailwind/react";


export function SignIn() {
  return (
    
    <>
<div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Our Web Development Services
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section
  class="
  bg-white
   pt-20
   lg:pt -[120px]
   pb-12
   lg:pb-[90px]
   flex
   justify-center
   z-100
   overflow-hidden
   "
   >
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                  Pricing Packages
               </h2>
               <p class="text-base text-body-color">
                  
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap justify-center -mx-4">
         <div class="w-full md:w-1/2 lg:w-1/3 px-4 transition duration-300 ease-in-out hover:scale-110">
            <div
               class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
               >
               <span class="text-primary font-semibold text-lg block mb-4">
               Personal
               </span>
               <h2 class="font-bold text-dark mb-5 text-[42px]">
                  $500 
                  <span class="text-base text-body-color font-medium">
                  one time fee
                  </span>
               </h2>
               <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                  Perfect for small businesses or singular users who only need a minimally maintained static business site.
               </p>
               <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                     SSL Security Features
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     All UI components
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     Lifetime access
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                  24/7 Customer Support
                  </p>
               </div>
               
               <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                     <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                           <linearGradient
                              id="paint0_linear"
                              x1="86"
                              y1="0"
                              x2="86"
                              y2="172"
                              gradientUnits="userSpaceOnUse"
                              >
                              <stop stop-color="#000000" stop-opacity="0.09" />
                              <stop
                                 offset="1"
                                 stop-color="#C4C4C4"
                                 stop-opacity="0"
                                 />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#000000"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4 transition duration-300 ease-in-out hover:scale-110">
            <div
               class="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
               >
               <span class="text-primary font-semibold text-lg block mb-4">
               Growth
               </span>
               <h2 class="font-bold text-dark mb-5 text-[42px]">
                  $1000
                  <span class="text-base text-body-color font-medium">
                  and then 200/mo.
                  </span>
               </h2>
               <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                  Perfect for expanding companies in need of a site to help drive growth.
               </p>
               <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                     SSL Security Features
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     Fully Integrated E-commerce Tools
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     SEO Optimization
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     10 Professional Domain Based Emails
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                     24/7 Customer Support
                  </p>
               </div>
               
               <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                     <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                           <linearGradient
                              id="paint0_linear"
                              x1="86"
                              y1="0"
                              x2="86"
                              y2="172"
                              gradientUnits="userSpaceOnUse"
                              >
                              <stop stop-color="#000000" stop-opacity="0.09" />
                              <stop
                                 offset="1"
                                 stop-color="#C4C4C4"
                                 stop-opacity="0"
                                 />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#000000"
                           />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="#000000"
                          />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="#000000"
                          />
                    </svg>
                  </span>
              </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4 transition duration-300 ease-in-out hover:scale-110">
            <div
              class="
              bg-white
              rounded-xl
              relative
              z-10
              overflow-hidden
              border border-primary border-opacity-20
              shadow-pricing
              py-10
              px-8
              sm:p-12
              lg:py-10 lg:px-6
              xl:p-12
              mb-10
              "
              >
              <span class="text-primary font-semibold text-lg block mb-4">
              Scale
              </span>
              <h2 class="font-bold text-dark mb-5 text-[42px]">
                  $1500
                  <span class="text-base text-body-color font-medium">
                  and then 500/mo.
                  </span>
              </h2>
              <p
                  class="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                  Perfect for companies who are in the midst of scaling rapidly and need a site to match that exponential growth.
              </p>
              <div class="mb-7">
                  <p class="text-base text-body-color leading-loose mb-1">
                    SSL Security Features
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Fully Integrated E-commerce Tools
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Mobile App Integration
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Social Media Management/Support
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    20+ Professional Domain Based Emails
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    SEO Optimization
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                    Website Metrics
                  </p>
                  <p class="text-base text-body-color leading-loose mb-1">
                  24/7 Customer Support
                  </p>
              </div>
              
              <div>
                  <span class="absolute right-0 top-7 z-[-1]">
                    <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient
                              id="paint0_linear"
                              x1="86"
                              y1="0"
                              x2="86"
                              y2="172"
                              gradientUnits="userSpaceOnUse"
                              >
                              <stop stop-color="#000000" stop-opacity="0.09" />
                              <stop
                                 offset="1"
                                 stop-color="#C4C4C4"
                                 stop-opacity="0"
                                 />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
                  <span class="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#000000"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#000000"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}
export default SignIn;
