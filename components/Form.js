import { useState } from 'react';
import Button from './Button';

function Form() {
  const [name, setName] = useState('');
  const [exam, setExam] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <div className="mt-20 px-4 md:px-12 xl:px-24 py-12 xl:py-[10vh] bg-[#363876] text-white lg:flex lg:space-x-8 ">
        <div className="lg:w-[45%]">
          <h2 className="text-2xl lg:mb-8 lg:text-[2em]">
            Have Any Question ?
          </h2>
          <p className="mt-4">
            Rank Predictor by Find my rank helps students get their probable
            rank based on the expected exam score. Candidates can use the answer
            key of JEE and NEET to calculate their approximate score before the
            declaration of JEE Main 2021 result.
          </p>
        </div>
        <div className="grow lg:pl-16 xl:pl-32">
          <form className="mt-4 lg:mt-0 space-y-6" action="#" method="POST">
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="inline-block mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="exam" className="inline-block mb-1">
                  Exam
                </label>
                <input
                  name="exam"
                  type="text"
                  required
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Exam"
                />
              </div>
              <div>
                <label htmlFor="email" className="inline-block mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="inline-block mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  type="message"
                  className="appearance-none rounded-md block w-full h-28 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Message ..."
                />
              </div>
              <div className="pt-6">
                <Button text="Submit" bg="light" fw="bold" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
