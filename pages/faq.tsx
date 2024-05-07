import type { NextPage } from 'next/types'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import HamburgerMenu from './components/HamburgerMenu'

type faq = {
  question: string;
  answer: string;
}
type contact = {
  name: string;
  number: string;
}

const FAQ: NextPage = () => {
  const [contactInfo, setContactInfo] = useState<contact[]>([]);

  useEffect(() => {
      // Assume these are fetched from an API or another source
      setContactInfo([
        {
          name: 'Tom Chapman',
          number: '07712345678',
        },
        {
          name: 'Lottie Richards',
          number: '07787654321',
        }
      ]);
  }, []);

  const things: faq []= [

    {
      question: 'Is there parking available?',
      answer: 'Yes there is plenty of parking on site. You will need to have collected your car by 11am the following day.',
    },
    {
      question: 'What is the dress code for your wedding?',
      answer: 'Dress to impress! We know you’ll all look amazing – Wedding attire – NO WHITE DRESSES or outfits (I’ll have my Bridesmaids on hand with Red wine – joking not joking 😉 )',
    },
    {
      question: 'Am I allowed to bring a plus one?',
      answer: 'Unfortunately not – this is named invitees only.',
    },
    {
      question: 'Am I allowed to bring my children?',
      answer: 'We are very sorry, but we are unable to extend the invitation to children. We hope you understand and can still join us on our special day.',
    },
    {
      question: 'What time should I arrive at your wedding ceremony?',
      answer: 'Please arrive at 1pm for the ceremony to begin at 1.30pm',
    },
    {
      question: 'Am I allowed to take photos at your wedding?',
      answer: 'Of course – We’d love for you to be present on the day and not on your phone all the time but we welcome all of the behind the scenes photos. There will be a photo upload location as we’d love to see them all.',
    },
    {
      question: 'Can I post wedding photos on social media?',
      answer: 'Again – Yes of course – but please refrain from posting anything of the Bride and Groom until they have posted themselves.',
    },
    {
      question: 'Do you have a gift registry?',
      answer: 'The most important thing to us is that you are able to celebrate with us on our wedding day. However, if you wish to give a gift, we will gratefully accept a contribution towards our honeymoon.',
    },
    {
      question: 'I have more questions about your wedding, who can I contact?',
      answer: 'Tom and Lottie are available for any questions you may have leading up to the wedding. We won’t be contactable on the morning of the wedding so please ensure you ask anything you may want to know ahead of time.',
    }
  ];
  return (
    <>
    <HamburgerMenu />
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="headings flex mx-auto flex-col text-center">
        <h1 className="text-4xl text-white">FAQ</h1>
        <h2 className='my-4'>🤍</h2>

        <div>
        <div key="loc" className="my-10 max-w-screen-sm">
              <h3 className="text-2xl underline pb-2 text-white">How do I get there?</h3>
              <p className="text-md leading-relaxed py-4">The address for the venue is: Hanbury Barns Wedding Venue, Parsons Brake Farm, Hanbury, Staffordshire, DE13 8TN <a className='underline text-blue-300' href='https://maps.app.goo.gl/Yd65zsZVQnc7ZSwN7?g_st=ic'>Google Maps link</a></p>
            </div>
          {things.map((faq, index) => (
            <div key={index} className="my-10 max-w-screen-sm">
              <h3 className="text-2xl underline pb-2 text-white">{faq.question}</h3>
              <p className="text-md leading-relaxed py-4">{faq.answer}</p>
            </div>
          ))}
          <p className='text-white'>
            {contactInfo.map((contact, index) => (
              <div key={index} className="my-5">
                <strong>{contact.name}</strong> - <span>{contact.number}</span>
              </div>
            ))}

            </p>
        </div>

      </div>
    </div>
    </>
  )
}

export default FAQ
