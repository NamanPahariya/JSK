import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Img, Heading, Text, Button, Input } from "../../components";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    otherService: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const services = [
    "Staff Augmentation",
    "Direct Placement",
    "Web Development",
    "UI/UX",
    "Talent Hunt",
    "Other",
  ];

  const handleServiceClick = (service) => {
    setForm((prev) => ({
      ...prev,
      service: prev.service === service ? "" : service,
      otherService: service !== "Other" ? "" : prev.otherService,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.company.trim()) newErrors.company = "Company is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.service) newErrors.service = "Please select a service";
    if (form.service === "Other" && !form.otherService.trim()) {
      newErrors.otherService = "Please specify the other service";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      name: form.name,
      email: form.email,
      company: form.company,
      phone: form.phone,
      service: form.service === "Other" ? form.otherService : form.service,
      message: form.message,
    };

    emailjs
      .send(
        "your_service_id",
        "your_template_id",
        templateParams,
        "your_user_id"
      )
      .then((response) => {
        alert("Message sent successfully!");
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          otherService: "",
          message: "",
        });
        setErrors({});
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="w-full bg-[#F7F7F7] font-dmsans overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="h-[207px] w-[900px] md:w-[500px] sm:w-[400px] xs:w-[500px]">
          <Img
            src="/images/img_mask_group_14.png"
            alt="Background"
            className="w-full h-full object-cover block"
          />
        </div>
      </div>

      {/* Heading */}
      <div className="text-center -mt-20 sm:-mt-14 relative z-10 px-4">
        <div className="flex justify-center">
          <Button
            color="gray_200"
            shape="round"
            className="min-w-[134px] rounded-[16px] px-6 font-hankengrotesk font-semibold tracking-[-0.32px] sm:px-5"
            data-aos="fade-up"
          >
            Get in Touch
          </Button>
        </div>
        <Heading
          as="h2"
          className="mt-2 text-[#035F5A] text-[40px] sm:text-[32px] font-semibold tracking-[-1px]"
        >
          Contact Us
        </Heading>
        <Text className="text-center text-base sm:text-sm md:text-sm text-blue_gray-700 leading-relaxed px-4 max-w-2xl mx-auto">
          Building stronger teams and lasting success through meaningful
          connections
        </Text>
      </div>

      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 w-full h-full -z-1 pointer-events-none">
          <Img
            src="/images/img_vector_15.png"
            alt="Left Vector"
            className="absolute left-0 top-0 h-full w-auto object-contain"
          />
          <Img
            src="/images/img_vector_15.1.png"
            alt="Right Vector"
            className="absolute right-0 top-0 h-full w-auto object-contain"
          />
        </div>

        <div className="flex justify-center items-center">
          <form
            className="bg-[#FFFFFF] border border-[#E7E7E7] p-6 md:p-8 rounded-xl shadow-md w-full max-w-2xl z-10 relative"
            onSubmit={sendEmail}
          >
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mb-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="border rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="border rounded-md"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>
              <div>
                <Input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="border rounded-md"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Services */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                Service
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceClick(service)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${
                      form.service === service
                        ? "bg-teal-600 text-white border-teal-600"
                        : "bg-gray-100 text-gray-700 border-gray-300"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              {form.service === "Other" && (
                <Input
                  type="text"
                  name="otherService"
                  value={form.otherService}
                  onChange={handleChange}
                  placeholder="Type your service"
                  className="mt-4 border"
                />
              )}
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service}</p>
              )}
              {errors.otherService && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.otherService}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block font-medium text-gray-700 mb-2">
                How can we help you?
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full h-32 border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-6 rounded-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
