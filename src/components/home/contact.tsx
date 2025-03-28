import { useState } from "react";
import { contactInfo } from "../../constants/contact";
import contactImg from "/assets/images/contact.webp";
import facebookIcon from "/assets/images/facebook.svg";
import Label from "../UI/label";
import Textarea from "../UI/textarea";
import GreenButton from "../UI/btn-green";
import { proffesionsData } from "../../constants/proffesions";
import FormField from "../UI/form-field";

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  option: string;
  message: string;
  term1: boolean;
  term2: boolean;
};

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    option: "",
    message: "",
    term1: false,
    term2: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-[#71837B] px-[6rem] pt-[4rem] pb-[5rem] flex items-center justify-center">
      <div className="bg-white rounded-lg w-full h-[40rem] flex">
        <div
          className="bg-cover bg-center w-full rounded-lg flex-1/3 px-8 py-12 flex flex-col gap-6"
          style={{ backgroundImage: `url(${contactImg})` }}
        >
          <h2 className="text-5xl font-bold">Contact Us </h2>
          <p className="text-sm">
            Fill up the form and ur Team will back to you within 24 hours. Happy
            to see your message!
          </p>
          <div className="flex flex-col gap-4 mt-6">
            {contactInfo.map((info) => {
              return (
                <div className="flex gap-8 items-center" key={info}>
                  <img src={facebookIcon} alt="facebook" className="w-6 h-6" />
                  <p className="text-sm">{info}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-auto flex gap-8">
            <img src={facebookIcon} alt="facebook" className="w-8 h-8" />
            <img src={facebookIcon} alt="facebook" className="w-8 h-8" />
            <img src={facebookIcon} alt="facebook" className="w-8 h-8" />
          </div>
        </div>
        <form
          className="flex-2/3 flex flex-col gap-8 px-4 py-12"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-2 flex-1/2">
              <FormField
                name="First Name"
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                placeholder="Jake"
                className="w-full"
                isRequired
              />
            </div>
            <div className="flex flex-col gap-2 flex-1/2">
              <FormField
                name="Last Name"
                id="lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                placeholder="Doe"
                className="w-full"
                isRequired
              />
            </div>
          </div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-2 flex-1/2">
              <FormField
                name="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="example@gmail.com"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2 flex-1/2">
              <FormField
                name="Phone Number"
                id="phoneNumber"
                type="tel"
                value={form.phoneNumber}
                onChange={(e) =>
                  setForm({ ...form, phoneNumber: e.target.value })
                }
                placeholder="+38 012 102 402"
                className="w-full"
              />
            </div>
          </div>

          <fieldset className="flex gap-10" aria-labelledby="profession-label">
            <legend id="profession-label" className="sr-only">
              Select your profession
            </legend>
            {proffesionsData.map((option) => {
              return (
                <div className="flex gap-2 items-center" key={option}>
                  <input
                    type="radio"
                    id={option}
                    name="option"
                    value={option}
                    onChange={(e) =>
                      setForm({ ...form, option: e.target.value })
                    }
                    className="accent-[#3A6150] hover:cursor-pointer"
                  />
                  <Label
                    htmlFor={option}
                    className="text-sm hover:cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              );
            })}
          </fieldset>

          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-2 flex-1/2">
              <Label htmlFor="message" className="text-sm">
                Message
              </Label>
              <Textarea
                id="message"
                rows={4}
                cols={50}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="message"
                className="w-full rounded-sm "
              />
            </div>
          </div>
          <fieldset className="flex gap-10" aria-labelledby="consents-label">
            <legend id="consents-label" className="sr-only">
              Consent options
            </legend>
            <div className="flex gap-10">
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  id="term1"
                  checked={form.term1}
                  onChange={(e) =>
                    setForm({ ...form, term1: e.target.checked })
                  }
                  className="accent-[#3A6150] hover:cursor-pointer"
                />
                <Label htmlFor="term1" className="text-sm hover:cursor-pointer">
                  Accept the Terms
                </Label>
              </div>

              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="term2"
                  checked={form.term2}
                  onChange={(e) =>
                    setForm({ ...form, term2: e.target.checked })
                  }
                  className="accent-[#3A6150] hover:cursor-pointer"
                />
                <Label htmlFor="term2" className="text-sm hover:cursor-pointer">
                  Accept the Terms 2
                </Label>
              </div>
            </div>
          </fieldset>

          <GreenButton className="min-w-40 h-12 mt-4 ml-auto">
            <span className="text-white text-sm">Send Message</span>
          </GreenButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
