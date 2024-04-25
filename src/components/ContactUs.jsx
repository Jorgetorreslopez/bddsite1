import { useState } from "react"
import {
    Button,
    Input,
    Textarea,
    Typography
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import toast from 'react-hot-toast'

function ContactUs() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      toast.promise(
        response,
        {
          loading: 'Sending email...',
          success: () => {
            setFormData({ name: '',
              email: '',
              message: ''})
            return 'Email sent!'
          },
          error: (err) => `Email not sent: ${err.toString()}`,
        },
        {
          style: {
            minWidth: '250px',
            // backgroundColor: '#333', 
            // color: '#fff', 
            border: '1px solid #fff', 
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.7)', 
            fontSize: '16px', 
            fontWeight: 'bold',
          },
          success: {
            duration: 4000,
            icon: '✅',

          },
          error: {
            duration: 4000,
            icon: '❌',

          },
          position: "bottom-right",
          ariaProps: {
            role: "status",
            "aria-live": "polite"
          }
        }
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className="flex flex-col lg:flex-row justify-center border-t-2 border-t-orange-100 items-center pt-4">
      <div id="consultation" className="text-center lg:text-left lg:pl-6 lg:w-2/5 self-center">
        <div className="flex flex-row justify-center gap-6 align-baseline">
          <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
            <EnvelopeIcon className="h-8 w-8 text-white " />
          </div>
          <Typography
            variant="h3"
            className="mb-3 font-bold"
            color="blue-gray"
          >
            Free consultations
          </Typography>
        </div>
          <Typography className="mb-8 font-normal text-blue-gray-500">
            Take advantage of our complimentary consultation service to discuss your web development needs. Our experts will assess your requirements and provide tailored recommendations to help you achieve your online goals. Schedule your free consultation today to get started.
          </Typography>
      </div>
      <div id="contact" className="flex flex-col lg:w-3/4 p-4">
        <PageTitle section="Contact Us" heading="Want to work with us?">
          Complete this form and we will get back to you in 24 hours.
        </PageTitle>
        <form className="mx-auto w-full mt-12 lg:w-3/4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 sm:gap-8 md:flex-row mb-1.5">
            <Input 
              type="text" 
              name="name" 
              variant="outlined" 
              size="lg" 
              label="Full Name" 
              value={formData.name} 
              onChange={handleChange}
              className="flex-1"  
            />
            <Input 
              type="email"  
              name="email" 
              variant="outlined" 
              size="lg" 
              label="Email Address" 
              value={formData.email} 
              onChange={handleChange}
              className="flex-1"  
            />
          </div>
          <Textarea 
            variant="outlined" 
            name="message" 
            size="lg" 
            label="Message" 
            rows={8} 
            value={formData.message} 
            onChange={handleChange}
            className="mt-4"  
          />
          <Button 
            variant="gradient" 
            size="lg" 
            type="submit" 
            className="mt-8" 
            fullWidth
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
  
}


export default ContactUs

/*

*/