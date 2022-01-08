import { useState } from 'react';
import Button from './Button';

function Form() {
  const [name, setName] = useState('');
  const [exam, setExam] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="my-4 px-4 py-12 bg-[#363876] text-white">
      <div>
        <h2 className="text-2xl">Have Any Question ?</h2>
        <p className="mt-4">
          Rank Predictor by Find my rank helps students get their probable rank
          based on the expected exam score. Candidates can use the answer key of
          JEE and NEET to calculate their approximate score before the
          declaration of JEE Main 2021 result.
        </p>
      </div>
      <div>
        <form className="mt-4 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="name" className="">
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
              <label htmlFor="exam" className="">
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
              <label htmlFor="email" className="">
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
              <label htmlFor="message" className="">
                Message
              </label>
              <textarea
                name="message"
                type="message"
                className="appearance-none rounded-md block w-full h-28 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Message ..."
              />
            </div>
            <div className="pt-4">
              <Button text="Submit" bg="light" fw="bold" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
