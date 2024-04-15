import { useState } from "react"
import {
    Button,
    Input,
    Textarea
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";

function ContactUs() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Message sent successfully');
        setFormData({ name: '',
        email: '',
        message: ''})
      } else {
        // Handle error
        console.error('Error sending message');
      }
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