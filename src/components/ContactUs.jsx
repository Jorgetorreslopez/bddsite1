import { useState } from "react"
import {
    Button,
    Input,
    Textarea
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
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
    <>
    <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12" onSubmit={handleSubmit}>
            <div className="mb-8 flex gap-8">
              <Input type="text" name="name" variant="outlined" size="lg" label="Full Name" value={formData.name} onChange={handleChange}/>
              <Input variant="outlined" name="email" size="lg" label="Email Address" value={formData.email} onChange={handleChange} />
            </div>
            <Textarea variant="outlined" name="message" size="lg" label="Message" rows={8} value={formData.message} onChange={handleChange}/>
            <Button variant="gradient" size="lg" type="submit" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
    </>
  )
}
export default ContactUs