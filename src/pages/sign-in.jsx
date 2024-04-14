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
      <div style={{ backgroundColor: '#fff', color: '#333', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ flex: '1', backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '5px' }}>
          <h3>Basic Package</h3>
          <ul>
            <li>Static Website Development</li>
            <li>Responsive Design</li>
            <li>HTML & CSS</li>
          </ul>
          <p>Starting at $500</p>
        </div>
        <div style={{ flex: '1', backgroundColor: '#eee', padding: '20px', borderRadius: '5px', margin: '0 20px' }}>
          <h3>Standard Package</h3>
          <ul>
            <li>Dynamic Website Development</li>
            <li>Content Management System (CMS)</li>
            <li>Database Integration</li>
            <li>Basic SEO</li>
          </ul>
          <p>Starting at $1000</p>
        </div>
        <div style={{ flex: '1', backgroundColor: '#666', color: '#fff', padding: '20px', borderRadius: '5px' }}>
          <h3>Premium Package</h3>
          <ul>
            <li>E-commerce Website Development</li>
            <li>Custom Web Application Development</li>
            <li>Advanced SEO</li>
            <li>Integration with Payment Gateways</li>
          </ul>
          <p>Starting at $2000</p>
        </div>
      </div>
    </div>

      <div className="bg-white">
        <Footer />
      </div>

    </>
  );
}
export default SignIn;
